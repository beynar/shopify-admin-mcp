# Mutation: `orderEditRemoveLineItemDiscount`

**Returns:** `OrderEditRemoveLineItemDiscountPayload`

Removes a line item discount that was applied as part of an order edit.

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the line item discount is removed.
- **`discountApplicationId`**: `ID!` — The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

## Payload Fields

- `calculatedLineItem`: `CalculatedLineItem` — The calculated line item after removal of the discount.
- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedLineItem](../types/objects/CalculatedLineItem.md)
- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditRemoveLineItemDiscountPayload](../types/objects/OrderEditRemoveLineItemDiscountPayload.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderEditRemoveLineItemDiscount($id: ID!, $discountApplicationId: ID!) {
  orderEditRemoveLineItemDiscount(id: $id, discountApplicationId: $discountApplicationId) {
    calculatedLineItem {
      id
    }
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
