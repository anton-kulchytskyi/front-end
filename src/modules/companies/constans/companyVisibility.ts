export const CompanyVisibility = {
  ALL: 'all',
  VISIBLE: 'visible',
  HIDDEN: 'hidden',
} as const;

export type CompanyVisibility =
  (typeof CompanyVisibility)[keyof typeof CompanyVisibility];

export const CompanyVisibilityOptions = [
  { value: CompanyVisibility.ALL, label: 'status.all' },
  { value: CompanyVisibility.VISIBLE, label: 'status.visible' },
  { value: CompanyVisibility.HIDDEN, label: 'status.hidden' },
] as const;
