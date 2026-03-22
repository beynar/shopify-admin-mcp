# Object: `AppSubscriptionDiscount`

Discount applied to the recurring pricing portion of a subscription.

## Fields

- `durationLimitInIntervals`: `Int` — The total number of billing intervals to which the discount will be applied.
- `priceAfterDiscount`: `MoneyV2!` — The price of the subscription after the discount is applied.
- `remainingDurationInIntervals`: `Int` — The remaining number of billing intervals to which the discount will be applied.
- `value`: `AppSubscriptionDiscountValue!` — The value of the discount applied every billing interval.

## Related Types

- [AppSubscriptionDiscountValue](../../types/unions/AppSubscriptionDiscountValue.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
