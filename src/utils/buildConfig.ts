import { type ReactNode } from 'react';

export type ConfigItem<T extends object> = {
  key: keyof T;
  icon: ReactNode;
  label: string;
  format?: (value: T[keyof T]) => string;
};

export type Item = {
  icon: ReactNode;
  label: string;
  value: string | number;
};

export const buildConfig = <T extends object>(
  data: T | null | undefined,
  config: ConfigItem<T>[]
): Item[] => {
  if (!data) return [];
  return config.map((item) => {
    const raw = data[item.key];
    const value = item.format ? item.format(raw) : String(raw);

    return {
      icon: item.icon,
      label: item.label,
      value,
    };
  });
};
