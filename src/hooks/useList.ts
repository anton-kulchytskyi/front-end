import { useState, useMemo } from 'react';

type FilterConfig<T> = {
  [key: string]: (item: T, filterValue: string) => boolean;
};

type UseListConfig<T> = {
  searchKeys?: (keyof T)[];
  filters?: FilterConfig<T>;
  itemsPerPage?: number;
};

export function useList<T>(data: T[], config: UseListConfig<T>) {
  const { searchKeys = [], filters = {}, itemsPerPage = 6 } = config;

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [filterValues, setFilterValues] = useState<Record<string, string>>(
    Object.keys(filters).reduce((acc, key) => ({ ...acc, [key]: 'all' }), {})
  );

  const setFilter = (filterName: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [filterName]: value }));
    setPage(1);
  };

  const filteredData = useMemo(() => {
    let items = [...data];

    // search
    if (search && searchKeys.length > 0) {
      const q = search.toLowerCase();
      items = items.filter((item) =>
        searchKeys.some((key) => String(item[key]).toLowerCase().includes(q))
      );
    }

    // filters
    for (const key in filters) {
      const filterFn = filters[key];
      const filterValue = filterValues[key];

      if (filterValue !== 'all') {
        items = items.filter((item) => filterFn(item, filterValue));
      }
    }

    return items;
  }, [data, search, searchKeys, filters, filterValues]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, page, itemsPerPage]);

  return {
    items: paginatedItems,
    page,
    totalPages,
    setPage,

    search,
    setSearch,

    filters: filterValues,
    setFilter,
  };
}
