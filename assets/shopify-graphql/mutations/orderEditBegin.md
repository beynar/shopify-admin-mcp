# Mutation: `orderEditBegin`

**Returns:** `OrderEditBeginPayload`

Starts an order editing session that enables you to modify an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). This mutation creates an [`OrderEditSession`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession) and returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing how the order looks with your changes applied.

Order editing follows a three-step workflow: Begin the edit with [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin), apply changes using mutations like [`orderEditAddVariant`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant) or [`orderEditSetQuantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity), and then save the changes with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation. The session tracks all staged changes until you commit or abandon them.

Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

## Arguments

- **`id`**: `ID!` — The ID of the order to begin editing.

## Payload Fields

- `calculatedOrder`: `CalculatedOrder` — The order that will be edited.
- `orderEditSession`: `OrderEditSession` — The order edit session that was created.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditBeginPayload](../types/objects/OrderEditBeginPayload.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderEditBegin($id: ID!) {
  orderEditBegin(id: $id) {
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
