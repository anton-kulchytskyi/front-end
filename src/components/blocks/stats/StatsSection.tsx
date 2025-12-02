import { Grid } from '@mui/material';

import StatCard from './StatCard';

import { EmptyMessage, SectionHeader } from '@/components/common';
import type { Item } from '@/utils/buildConfig';

type StatsSectionProps = {
  title: string;
  stats: Item[];
};

const StatsSection = ({ title, stats }: StatsSectionProps) => {
  if (stats.length === 0) {
    return (
      <>
        <SectionHeader title={title} />
        <EmptyMessage text="No statistics yet" />
      </>
    );
  }
  return (
    <>
      <SectionHeader title={title} />

      <Grid
        container
        spacing={2}
        sx={{ mt: 1 }}
      >
        {stats.map((stat, index) => (
          <Grid
            size={{ xs: 6 }}
            key={index}
          >
            <StatCard
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

StatsSection.displayName = 'StatsSection';

export default StatsSection;
