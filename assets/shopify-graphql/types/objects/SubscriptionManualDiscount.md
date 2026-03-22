# Object: `SubscriptionManualDiscount`

Custom subscription discount.

## Fields

- `entitledLines`: `SubscriptionDiscountEntitledLines!` — Entitled line items used to apply the subscription discount on.
- `id`: `ID!` — The unique ID.
- `recurringCycleLimit`: `Int` — The maximum number of times the subscription discount will be applied on orders.
- `rejectionReason`: `SubscriptionDiscountRejectionReason` — The reason that the discount on the subscription draft is rejected.
- `targetType`: `DiscountTargetType!` — Type of line the discount applies on.
- `title`: `String` — The title associated with the subscription discount.
- `type`: `DiscountType!` — The type of the subscription discount.
- `usageCount`: `Int!` — The number of times the discount was applied.
- `value`: `SubscriptionDiscountValue!` — The value of the subscription discount.

## Related Types

- [DiscountTargetType](../../types/enums/DiscountTargetType.md)
- [DiscountType](../../types/enums/DiscountType.md)
- [SubscriptionDiscountEntitledLines](../../types/objects/SubscriptionDiscountEntitledLines.md)
- [SubscriptionDiscountRejectionReason](../../types/enums/SubscriptionDiscountRejectionReason.md)
- [SubscriptionDiscountValue](../../types/unions/SubscriptionDiscountValue.md)
