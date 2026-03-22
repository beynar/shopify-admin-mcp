# Object: `ShopPayPaymentRequestLineItem`

Represents a line item for a Shop Pay payment request.

## Fields

- `finalItemPrice`: `MoneyV2!` — The final item price for the line item.
- `finalLinePrice`: `MoneyV2!` — The final line price for the line item.
- `image`: `ShopPayPaymentRequestImage` — The image of the line item.
- `itemDiscounts`: `[ShopPayPaymentRequestDiscount!]` — The item discounts for the line item.
- `label`: `String!` — The label of the line item.
- `lineDiscounts`: `[ShopPayPaymentRequestDiscount!]` — The line discounts for the line item.
- `originalItemPrice`: `MoneyV2` — The original item price for the line item.
- `originalLinePrice`: `MoneyV2` — The original line price for the line item.
- `quantity`: `Int!` — The quantity of the line item.
- `requiresShipping`: `Boolean` — Whether the line item requires shipping.
- `sku`: `String` — The SKU of the line item.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [ShopPayPaymentRequestDiscount](../../types/objects/ShopPayPaymentRequestDiscount.md)
- [ShopPayPaymentRequestImage](../../types/objects/ShopPayPaymentRequestImage.md)
