import { useState, useEffect, useMemo } from 'react';

export type FilterConfig<T, F> = {
  [key: string]: (item: T, filterValue: F) => boolean;
};

export type UseListConfig<T, F> = {
  searchKeys?: (keyof T)[];
  filters?: FilterConfig<T, F>;
  itemsPerPage?: number;
};

type FetcherFunction<T> = () => Promise<T[]>;

interface ListState<T> {
  data: T[];
  isLoading: boolean;
  error: string | null;
}

export function useList<T, F = string>(
  fetcher: FetcherFunction<T>,
  config: UseListConfig<T, F>
) {
  const { searchKeys = [], filters = {}, itemsPerPage = 6 } = config;

  const [state, setState] = useState<ListState<T>>({
    data: [],
    isLoading: true,
    error: null,
  });

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const [filterValues, setFilterValues] = useState<Record<string, F>>(
    Object.keys(filters).reduce(
      (acc, key) => {
        return { ...acc, [key]: 'all' as unknown as F };
      },
      {} as Record<string, F>
    )
  );

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const items = await fetcher();
        if (isMounted) {
          setState({ data: items, isLoading: false, error: null });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        if (isMounted) {
          setState({
            data: [],
            isLoading: false,
            error: 'Failed to load data',
          });
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [fetcher]);

  const setFilter = (filterName: string, value: F) => {
    setFilterValues((prev) => ({ ...prev, [filterName]: value }));
    setPage(1);
  };

  const filteredData = useMemo(() => {
    let items = [...state.data];

    if (search && searchKeys.length > 0) {
      const q = search.toLowerCase();
      items = items.filter((item) =>
        searchKeys.some((key) => String(item[key]).toLowerCase().includes(q))
      );
    }

    for (const key in filters) {
      const filterFn = filters[key];
      const filterValue = filterValues[key];

      if (filterValue !== ('all' as unknown as F)) {
        items = items.filter((item) => filterFn(item, filterValue));
      }
    }

    return items;
  }, [state.data, search, searchKeys, filters, filterValues]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, page, itemsPerPage]);

  return {
    items: paginatedItems,
    isLoading: state.isLoading,
    error: state.error,

    page,
    totalPages,
    setPage,

    search,
    setSearch,

    filters: filterValues,
    setFilter,
  };
}
