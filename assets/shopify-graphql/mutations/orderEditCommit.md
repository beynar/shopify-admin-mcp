# Mutation: `orderEditCommit`

**Returns:** `OrderEditCommitPayload`

Applies staged changes from an order editing session to the original order. This finalizes all modifications made during the edit session, including changes to line items, quantities, discounts, and shipping lines.

Order editing follows a three-step workflow: start with [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) to create an editing session, apply changes using various orderEdit mutations, and then save the changes with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation. The mutation can optionally notify the customer of changes and add staff notes for internal tracking.

You can only edit unfulfilled line items. If an edit changes the total order value, then the customer might need to pay a balance or receive a refund.

Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session that will have its changes applied to the order.
- **`notifyCustomer`**: `Boolean` — Whether to notify the customer or not.
- **`staffNote`**: `String` — Note for staff members.

## Payload Fields

- `order`: `Order` — The order with changes applied.
- `successMessages`: `[String!]` — Messages to display to the user after the staged changes are commmitted.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [OrderEditCommitPayload](../types/objects/OrderEditCommitPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderEditCommit($id: ID!, $notifyCustomer: Boolean, $staffNote: String) {
  orderEditCommit(id: $id, notifyCustomer: $notifyCustomer, staffNote: $staffNote) {
    order {
      id
    }
    successMessages
    userErrors {
      field
      message
    }
  }
}
```
