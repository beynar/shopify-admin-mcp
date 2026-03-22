# Object: `ReturnableFulfillment`

A delivered order that's eligible to be returned to the merchant. Provides the items from completed fulfillments that customers can select when initiating a return.

Use returnable fulfillments to determine which items are eligible for return before creating a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) with the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation. The line items show quantities that are available for return.

Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

**Implements:** `Node`

## Fields

- `fulfillment`: `Fulfillment!` — The fulfillment that the returnable fulfillment refers to.
- `id`: `ID!` — The unique ID of the Returnable Fulfillment.
- `returnableFulfillmentLineItems` `(first, after, last, before, reverse)`: `ReturnableFulfillmentLineItemConnection!` — The list of returnable fulfillment line items.

## Related Types

- [Fulfillment](../../types/objects/Fulfillment.md)
