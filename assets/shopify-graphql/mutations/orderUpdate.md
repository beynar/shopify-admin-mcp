# Mutation: `orderUpdate`

**Returns:** `OrderUpdatePayload`

Updates the attributes of an order, such as the customer's email, the shipping address for the order,
tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data) associated with the order.

If you need to make significant updates to an order, such as adding or removing line items, changing
quantities, or modifying discounts, then use
the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin)
mutation instead. The `orderEditBegin` mutation initiates an order editing session,
allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin`
mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

If you need to remove a customer from an order, then use the [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)
mutation instead.

Learn how to build apps that integrate with
[order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

## Arguments

- **`input`**: `OrderInput!` — The attributes of the updated order.

## Payload Fields

- `order`: `Order` — The updated order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [OrderInput](../types/inputs/OrderInput.md)
- [OrderUpdatePayload](../types/objects/OrderUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderUpdate($input: OrderInput!) {
  orderUpdate(input: $input) {
    order {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
