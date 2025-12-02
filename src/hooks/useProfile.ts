import { useMemo } from 'react';

type UseProfileConfig<T, Stats, Related> = {
  id?: string;
  source: T[];
  getStats: (id: number) => Stats;
  getRelated: (id: number) => Related;
  getId?: (item: T) => number; // optional: by default item.id
};

export function useProfile<T extends { id: number }, Stats, Related>(
  config: UseProfileConfig<T, Stats, Related>
) {
  const {
    id,
    source,
    getStats,
    getRelated,
    getId = (item) => item.id,
  } = config;

  const numericId = Number(id);

  // entity (user/company/anything)
  const entity = useMemo(
    () => source.find((item) => getId(item) === numericId),
    [numericId, source, getId]
  );

  // stats
  const stats = useMemo(
    () => (entity ? getStats(getId(entity)) : null),
    [entity, getStats, getId]
  );

  // related objects (activity / quizzes / etc)
  const related = useMemo(
    () => (entity ? getRelated(getId(entity)) : []),
    [entity, getRelated, getId]
  );

  return {
    entity,
    stats,
    related,
  };
}
