import type { FilterConfig, UseListConfig } from '@/hooks/useList';

export function createEnumFilter<T, F>(config: {
  mapping: Record<string, (item: T) => boolean>;
}) {
  return (item: T, filterValue: F) => {
    const fn = config.mapping[String(filterValue)];
    return fn ? fn(item) : true;
  };
}

export function createEnumOptions<T extends Record<string, string>>(
  enumObject: T,
  labels: Record<T[keyof T], string>
) {
  return (Object.values(enumObject) as Array<T[keyof T]>).map((value) => ({
    value,
    label: labels[value],
  }));
}

export function createListConfig<T, F = string>(config: {
  searchKeys?: (keyof T)[];
  filters?: FilterConfig<T, F>;
  itemsPerPage?: number;
}): UseListConfig<T, F> {
  return {
    searchKeys: config.searchKeys ?? [],
    filters: config.filters ?? {},
    itemsPerPage: config.itemsPerPage ?? 10,
  };
}
