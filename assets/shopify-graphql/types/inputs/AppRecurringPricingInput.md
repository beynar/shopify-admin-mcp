# Input Object: `AppRecurringPricingInput`

Instructs the app subscription to generate a fixed charge on a recurring basis. The frequency is specified by the billing interval.

## Input Fields

- `interval`: `AppPricingInterval` = `EVERY_30_DAYS` — How often the app subscription generates a charge.
- `price`: `MoneyInput!` — The amount to be charged to the store every billing interval.
- `discount`: `AppSubscriptionDiscountInput` — The discount applied to the subscription for a given number of billing intervals.

## Related Types

- [AppPricingInterval](../../types/enums/AppPricingInterval.md)
- [AppSubscriptionDiscountInput](../../types/inputs/AppSubscriptionDiscountInput.md)
- [MoneyInput](../../types/inputs/MoneyInput.md)
