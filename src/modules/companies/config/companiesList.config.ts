import { CompanyVisibility } from '../constans/companyVisibility';
import type { Company } from '../types/company.types';

import { createEnumFilter, createListConfig } from '@/utils/createListConfig';

export const companiesListConfig = createListConfig<Company, CompanyVisibility>(
  {
    searchKeys: ['name'],
    filters: {
      visibility: createEnumFilter<Company, CompanyVisibility>({
        mapping: {
          [CompanyVisibility.ALL]: () => true,
          [CompanyVisibility.VISIBLE]: (c) => c.is_visible,
          [CompanyVisibility.HIDDEN]: (c) => !c.is_visible,
        },
      }),
    },

    itemsPerPage: 6,
  }
);
