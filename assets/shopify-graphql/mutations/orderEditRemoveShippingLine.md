# Mutation: `orderEditRemoveShippingLine`

**Returns:** `OrderEditRemoveShippingLinePayload`

Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the shipping line is removed.
- **`shippingLineId`**: `ID!` — The ID of the calculated shipping line to remove.

## Payload Fields

- `calculatedOrder`: `CalculatedOrder` — The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder)
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[OrderEditRemoveShippingLineUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditRemoveShippingLinePayload](../types/objects/OrderEditRemoveShippingLinePayload.md)
- [OrderEditRemoveShippingLineUserError](../types/objects/OrderEditRemoveShippingLineUserError.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)

## Example Mutation

```graphql
mutation OrderEditRemoveShippingLine($id: ID!, $shippingLineId: ID!) {
  orderEditRemoveShippingLine(id: $id, shippingLineId: $shippingLineId) {
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
