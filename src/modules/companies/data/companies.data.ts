import type { Company } from '../types/company.types';

export const MOCK_COMPANIES: Company[] = [
  {
    id: 1,
    name: 'TechNova Solutions',
    description: 'A software development company specializing in AI products.',
    is_visible: true,
    owner_id: 1,
    created_at: '2024-01-10T09:15:00Z',
    updated_at: '2024-02-12T10:30:00Z',
  },
  {
    id: 2,
    name: 'GreenEnergy Corp',
    description:
      'Innovative green energy provider focused on solar technologies.',
    is_visible: true,
    owner_id: 2,
    created_at: '2024-01-21T12:45:00Z',
    updated_at: null,
  },
  {
    id: 3,
    name: 'QuantumSoft',
    description: 'Cloud-based data analytics platform for enterprise clients.',
    is_visible: false,
    owner_id: 3,
    created_at: '2024-02-05T15:20:00Z',
    updated_at: '2024-02-25T18:10:00Z',
  },
  {
    id: 4,
    name: 'DigitalCraft Agency',
    description:
      'Creative digital agency offering branding and design solutions.',
    is_visible: true,
    owner_id: 4,
    created_at: '2024-02-10T14:00:00Z',
    updated_at: null,
  },
  {
    id: 5,
    name: 'FinTrack Systems',
    description: 'Fintech startup developing personal budgeting tools.',
    is_visible: false,
    owner_id: 1,
    created_at: '2024-03-02T11:10:00Z',
    updated_at: null,
  },
];
