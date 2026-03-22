# Object: `RefundLineItem`

A [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) being refunded from an order. Each refund line item tracks the quantity, pricing, and restocking details for items returned to the merchant.

The refund line item links to the original [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) from the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and includes financial information such as the refunded price, subtotal, and taxes in both shop and presentment currencies. The [`restockType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.restockType) field indicates whether and how the merchant restocks the returned items to inventory, while the [`location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.location) field specifies where restocking occurs.

## Fields

- `id`: `ID` — A globally-unique ID.
- `lineItem`: `LineItem!` — The `LineItem` resource associated to the refunded line item.
- `location`: `Location` — The inventory restock location.
- `price`: `Money!` *(deprecated)* — The price of a refunded line item.
- `priceSet`: `MoneyBag!` — The price of a refunded line item in shop and presentment currencies.
- `quantity`: `Int!` — The quantity of a refunded line item.
- `restockType`: `RefundLineItemRestockType!` — The type of restock for the refunded line item.
- `restocked`: `Boolean!` — Whether the refunded line item was restocked. Not applicable in the context of a SuggestedRefund.
- `subtotal`: `Money!` *(deprecated)* — The subtotal price of a refunded line item.
- `subtotalSet`: `MoneyBag!` — The subtotal price of a refunded line item in shop and presentment currencies.
- `totalTax`: `Money!` *(deprecated)* — The total tax charged on a refunded line item.
- `totalTaxSet`: `MoneyBag!` — The total tax charged on a refunded line item in shop and presentment currencies.

## Related Types

- [LineItem](../../types/objects/LineItem.md)
- [Location](../../types/objects/Location.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [RefundLineItemRestockType](../../types/enums/RefundLineItemRestockType.md)
