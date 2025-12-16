export const formatDate = (input: string | Date | null | undefined) => {
  if (!input) return null;
  return new Date(input).toLocaleDateString();
};
