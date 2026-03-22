# Object: `CalculatedOrder`

An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

**Implements:** `Node`

## Fields

- `addedDiscountApplications` `(first, after, last, before, reverse)`: `CalculatedDiscountApplicationConnection!` — Returns only the new discount applications being added to the order in the current edit.
- `addedLineItems` `(first, after, last, before, reverse)`: `CalculatedLineItemConnection!` — Returns only the new line items being added to the order during the current edit.
- `cartDiscountAmountSet`: `MoneyBag` — Amount of the order-level discount (doesn't contain any line item discounts) in shop and presentment currencies.
- `committed`: `Boolean!` *(deprecated)* — Whether the changes have been applied and saved to the order.
- `id`: `ID!` — A globally-unique ID.
- `lineItems` `(first, after, last, before, reverse, query)`: `CalculatedLineItemConnection!` — Returns all items on the order that existed before starting the edit.
- `notificationPreviewHtml`: `HTML` — The HTML of the customer notification for the order edit.
- `notificationPreviewTitle`: `String!` — The customer notification title.
- `originalOrder`: `Order!` — The order without any changes applied.
- `shippingLines`: `[CalculatedShippingLine!]!` — Returns the shipping lines on the order that existed before starting the edit.
- `stagedChanges` `(first, after, last, before, reverse)`: `OrderStagedChangeConnection!` — List of changes made to the order during the current edit.
- `subtotalLineItemsQuantity`: `Int!` — The sum of the quantities for the line items that contribute to the order's subtotal.
- `subtotalPriceSet`: `MoneyBag` — The subtotal of the line items, in shop and presentment currencies, after all the discounts are applied.  The subtotal doesn't include shipping.  The subtotal includes taxes for taxes-included orders and excludes taxes for taxes-excluded orders.
- `taxLines`: `[TaxLine!]!` — Taxes charged for the line item.
- `totalOutstandingSet`: `MoneyBag!` — Total price of the order less the total amount received from the customer in shop and presentment currencies.
- `totalPriceSet`: `MoneyBag!` — Total amount of the order (includes taxes and discounts) in shop and presentment currencies.

## Related Types

- [CalculatedShippingLine](../../types/objects/CalculatedShippingLine.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [Order](../../types/objects/Order.md)
- [TaxLine](../../types/objects/TaxLine.md)
