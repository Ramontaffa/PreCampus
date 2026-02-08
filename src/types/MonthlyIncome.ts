export const MONTHLY_INCOME = {
  NONE: 0,
  UP_TO_1_MINIMUM: 1,
  FROM_1_TO_2: 2,
  FROM_2_TO_3: 3,
  ABOVE_3: 4,
} as const;

export type MonthlyIncome =
  (typeof MONTHLY_INCOME)[keyof typeof MONTHLY_INCOME];
