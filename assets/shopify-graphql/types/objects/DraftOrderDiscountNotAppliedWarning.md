# Object: `DraftOrderDiscountNotAppliedWarning`

A warning indicating that a discount cannot be applied to a draft order.

**Implements:** `DraftOrderWarning`

## Fields

- `discountCode`: `String` — The code of the discount that can't be applied.
- `discountTitle`: `String` — The title of the discount that can't be applied.
- `errorCode`: `String!` — The error code.
- `field`: `String!` — The input field that the warning applies to.
- `message`: `String!` — The warning message.
- `priceRule`: `PriceRule` — The price rule that can't be applied.

## Related Types

- [PriceRule](../../types/objects/PriceRule.md)
