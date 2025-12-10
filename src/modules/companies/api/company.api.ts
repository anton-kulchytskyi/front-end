import { MOCK_COMPANIES } from '../data/companies.data';
import type { Company } from '../types/company.types';

export const fetchAllCompanies = async (): Promise<Company[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return MOCK_COMPANIES;
};

export const fetchCompanyById = async (id: number): Promise<Company | null> => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return MOCK_COMPANIES.find((c) => c.id === id) ?? null;
};
