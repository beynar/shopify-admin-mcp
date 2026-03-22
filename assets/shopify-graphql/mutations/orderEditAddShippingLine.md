# Mutation: `orderEditAddShippingLine`

**Returns:** `OrderEditAddShippingLinePayload`

Adds a custom shipping line to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) during an edit session. Specify the shipping title and price to create a new [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine).

 Returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing the order with edits applied but not yet saved. To save your changes, use the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the shipping line is added.
- **`shippingLine`**: `OrderEditAddShippingLineInput!` — The shipping line to be added.

## Payload Fields

- `calculatedOrder`: `CalculatedOrder` — The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder)
- `calculatedShippingLine`: `CalculatedShippingLine` — The [calculated shipping line](https://shopify.dev/api/admin-graphql/latest/objects/calculatedshippingline)
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[OrderEditAddShippingLineUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [CalculatedShippingLine](../types/objects/CalculatedShippingLine.md)
- [OrderEditAddShippingLineInput](../types/inputs/OrderEditAddShippingLineInput.md)
- [OrderEditAddShippingLinePayload](../types/objects/OrderEditAddShippingLinePayload.md)
- [OrderEditAddShippingLineUserError](../types/objects/OrderEditAddShippingLineUserError.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)

## Example Mutation

```graphql
mutation OrderEditAddShippingLine($id: ID!, $shippingLine: OrderEditAddShippingLineInput!) {
  orderEditAddShippingLine(id: $id, shippingLine: $shippingLine) {
    calculatedOrder {
      id
    }
    calculatedShippingLine {
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
