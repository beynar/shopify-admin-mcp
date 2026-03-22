# Input Object: `SubscriptionManualDiscountInput`

The input fields for a subscription discount on a contract.

## Input Fields

- `title`: `String` — The title associated with the subscription discount.
- `value`: `SubscriptionManualDiscountValueInput` — Percentage or fixed amount value of the discount.
- `recurringCycleLimit`: `Int` — The maximum number of times the subscription discount will be applied on orders.
- `entitledLines`: `SubscriptionManualDiscountEntitledLinesInput` — Entitled line items used to apply the subscription discount on.

## Related Types

- [SubscriptionManualDiscountEntitledLinesInput](../../types/inputs/SubscriptionManualDiscountEntitledLinesInput.md)
- [SubscriptionManualDiscountValueInput](../../types/inputs/SubscriptionManualDiscountValueInput.md)
