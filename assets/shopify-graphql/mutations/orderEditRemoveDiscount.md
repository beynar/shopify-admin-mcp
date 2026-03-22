# Mutation: `orderEditRemoveDiscount`

**Returns:** `OrderEditRemoveDiscountPayload`

Removes a discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the discount is removed.
- **`discountApplicationId`**: `ID!` — The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

## Payload Fields

- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[OrderEditRemoveDiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditRemoveDiscountPayload](../types/objects/OrderEditRemoveDiscountPayload.md)
- [OrderEditRemoveDiscountUserError](../types/objects/OrderEditRemoveDiscountUserError.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)

## Example Mutation

```graphql
mutation OrderEditRemoveDiscount($id: ID!, $discountApplicationId: ID!) {
  orderEditRemoveDiscount(id: $id, discountApplicationId: $discountApplicationId) {
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
