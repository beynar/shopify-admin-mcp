# Object: `AppRecurringPricing`

The pricing information about a subscription app.
The object contains an interval (the frequency at which the shop is billed for an app subscription) and
a price (the amount to be charged to the subscribing shop at each interval).

## Fields

- `discount`: `AppSubscriptionDiscount` — The discount applied to the subscription for a given number of billing intervals.
- `interval`: `AppPricingInterval!` — The frequency at which the subscribing shop is billed for an app subscription.
- `planHandle`: `String` — The app store pricing plan handle.
- `price`: `MoneyV2!` — The amount and currency to be charged to the subscribing shop every billing interval.

## Related Types

- [AppPricingInterval](../../types/enums/AppPricingInterval.md)
- [AppSubscriptionDiscount](../../types/objects/AppSubscriptionDiscount.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
