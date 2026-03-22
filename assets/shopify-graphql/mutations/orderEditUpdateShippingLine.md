# Mutation: `orderEditUpdateShippingLine`

**Returns:** `OrderEditUpdateShippingLinePayload`

Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the shipping line.
- **`shippingLine`**: `OrderEditUpdateShippingLineInput!` — The updated shipping line.
- **`shippingLineId`**: `ID!` — The ID of the calculated shipping line to update.

## Payload Fields

- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[OrderEditUpdateShippingLineUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)
- [OrderEditUpdateShippingLineInput](../types/inputs/OrderEditUpdateShippingLineInput.md)
- [OrderEditUpdateShippingLinePayload](../types/objects/OrderEditUpdateShippingLinePayload.md)
- [OrderEditUpdateShippingLineUserError](../types/objects/OrderEditUpdateShippingLineUserError.md)

## Example Mutation

```graphql
mutation OrderEditUpdateShippingLine($id: ID!, $shippingLine: OrderEditUpdateShippingLineInput!, $shippingLineId: ID!) {
  orderEditUpdateShippingLine(id: $id, shippingLine: $shippingLine, shippingLineId: $shippingLineId) {
    calculatedOrder {
      id
    }
    orderEditSession {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
