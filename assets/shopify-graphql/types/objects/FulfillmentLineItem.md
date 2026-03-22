# Object: `FulfillmentLineItem`

A line item from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's included in a [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). Links the fulfillment to specific items from the original order, tracking how many units were fulfilled.

> Note: The discounted total excludes order-level discounts, showing only line-item specific discount amounts.

**Implements:** `Node`

## Fields

- `discountedTotal`: `Money!` *(deprecated)* — The total price after discounts are applied.
- `discountedTotalSet`: `MoneyBag!` — The total price after discounts are applied in shop and presentment currencies. This value doesn't include order-level discounts.
- `id`: `ID!` — A globally-unique ID.
- `lineItem`: `LineItem!` — The associated order's line item.
- `originalTotal`: `Money!` *(deprecated)* — The total price before discounts are applied.
- `originalTotalSet`: `MoneyBag!` — The total price before discounts are applied in shop and presentment currencies.
- `quantity`: `Int` — Number of line items in the fulfillment.

## Related Types

- [LineItem](../../types/objects/LineItem.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
