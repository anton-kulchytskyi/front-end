import { Box } from '@mui/material';

import { SectionHeader } from '../../common';

import InfoRow from './InfoRow';

import type { Item } from '@/utils/buildConfig';

type InfoSectionProps = {
  title: string;
  items: Item[];
};

const InfoSection = ({ title, items }: InfoSectionProps) => {
  return (
    <>
      <SectionHeader title={title} />

      <Box sx={{ mt: 2 }}>
        {items.map((item, index) => (
          <InfoRow
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
            isLast={index === items.length - 1}
          />
        ))}
      </Box>
    </>
  );
};

InfoSection.displayName = 'InfoSection';
export default InfoSection;
