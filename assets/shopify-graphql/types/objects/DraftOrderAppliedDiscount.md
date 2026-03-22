# Object: `DraftOrderAppliedDiscount`

The order-level discount applied to a draft order.

## Fields

- `amount`: `Money!` *(deprecated)* — Amount of the order-level discount that's applied to the draft order in shop currency.
- `amountSet`: `MoneyBag!` — The amount of money discounted, with values shown in both shop currency and presentment currency.
- `amountV2`: `MoneyV2!` *(deprecated)* — Amount of money discounted.
- `description`: `String!` — Description of the order-level discount.
- `title`: `String` — Name of the order-level discount.
- `value`: `Float!` — The order level discount amount. If `valueType` is `"percentage"`,
- `valueType`: `DraftOrderAppliedDiscountType!` — Type of the order-level discount.

## Related Types

- [DraftOrderAppliedDiscountType](../../types/enums/DraftOrderAppliedDiscountType.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
