# Mutation: `orderEditUpdateDiscount`

**Returns:** `OrderEditUpdateDiscountPayload`

Updates a manual line level discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the discount.
- **`discount`**: `OrderEditAppliedDiscountInput!` — The updated discount.
- **`discountApplicationId`**: `ID!` — The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to update.

## Payload Fields

- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[OrderEditUpdateDiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditAppliedDiscountInput](../types/inputs/OrderEditAppliedDiscountInput.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)
- [OrderEditUpdateDiscountPayload](../types/objects/OrderEditUpdateDiscountPayload.md)
- [OrderEditUpdateDiscountUserError](../types/objects/OrderEditUpdateDiscountUserError.md)

## Example Mutation

```graphql
mutation OrderEditUpdateDiscount($id: ID!, $discount: OrderEditAppliedDiscountInput!, $discountApplicationId: ID!) {
  orderEditUpdateDiscount(id: $id, discount: $discount, discountApplicationId: $discountApplicationId) {
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
