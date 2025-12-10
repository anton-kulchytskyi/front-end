export const CompanyVisibility = {
  ALL: 'all',
  VISIBLE: 'visible',
  HIDDEN: 'hidden',
} as const;

export type CompanyVisibility =
  (typeof CompanyVisibility)[keyof typeof CompanyVisibility];
