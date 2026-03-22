# Object: `DraftOrderPlatformDiscount`

The platform discounts applied to the draft order.

## Fields

- `allocations`: `[DraftOrderPlatformDiscountAllocation!]!` — Price reduction allocations across the draft order's lines.
- `automaticDiscount`: `Boolean!` — Whether the discount is an automatic discount.
- `bxgyDiscount`: `Boolean!` — Whether the discount is a buy x get y discount.
- `code`: `String` — If a code-based discount, the code used to add the discount.
- `discountClass`: `DiscountClass!` *(deprecated)* — The discount class.
- `discountClasses`: `[DiscountClass!]!` — The discount classes.
- `discountNode`: `DiscountNode` — The discount node for the platform discount.
- `id`: `ID` — The ID of the discount.
- `presentationLevel`: `String!` — Whether the discount is line, order or shipping level.
- `shortSummary`: `String!` — The short summary of the discount.
- `summary`: `String!` — The summary of the discount.
- `title`: `String!` — The name of the discount.
- `totalAmount`: `MoneyV2!` — The discount total amount in shop currency.
- `totalAmountPriceSet`: `MoneyBag!` — The amount of money discounted, with values shown in both shop currency and presentment currency.

## Related Types

- [DiscountClass](../../types/enums/DiscountClass.md)
- [DiscountNode](../../types/objects/DiscountNode.md)
- [DraftOrderPlatformDiscountAllocation](../../types/objects/DraftOrderPlatformDiscountAllocation.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
