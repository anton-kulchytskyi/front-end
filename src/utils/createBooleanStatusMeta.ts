export const createBooleanStatusMeta = (
  value: boolean,
  labels: { trueLabel: string; falseLabel: string }
) => ({
  label: value ? labels.trueLabel : labels.falseLabel,
  color: value ? ('success' as const) : ('warning' as const),
});
