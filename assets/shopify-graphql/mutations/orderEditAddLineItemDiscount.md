# Mutation: `orderEditAddLineItemDiscount`

**Returns:** `OrderEditAddLineItemDiscountPayload`

Applies a discount to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) during an order edit session. The discount can be either a fixed amount or percentage value.

To modify pricing on specific line items, use this mutation after starting an order edit with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation. The changes remain staged until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.
- **`lineItemId`**: `ID!` — The ID of the calculated line item to add the discount to.
- **`discount`**: `OrderEditAppliedDiscountInput!` — The discount to add to the line item.

## Payload Fields

- `addedDiscountStagedChange`: `OrderStagedChangeAddLineItemDiscount` — The discount applied to a line item during this order edit.
- `calculatedLineItem`: `CalculatedLineItem` — The line item with the edits applied but not saved.
- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedLineItem](../types/objects/CalculatedLineItem.md)
- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditAddLineItemDiscountPayload](../types/objects/OrderEditAddLineItemDiscountPayload.md)
- [OrderEditAppliedDiscountInput](../types/inputs/OrderEditAppliedDiscountInput.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)
- [OrderStagedChangeAddLineItemDiscount](../types/objects/OrderStagedChangeAddLineItemDiscount.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
  orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
    addedDiscountStagedChange {
      id
    }
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
