# Mutation: `orderEditSetQuantity`

**Returns:** `OrderEditSetQuantityPayload`

Sets the quantity of a line item on an order that's being edited. Use this mutation to increase, decrease, or remove items by adjusting their quantities.

Setting the quantity to zero effectively removes the line item from the order. The item still exists as a data structure with zero quantity. When decreasing quantities, you can optionally restock the removed items to inventory by setting the `restock` parameter to `true`.

Learn more about [editing workflows for existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

## Arguments

- **`id`**: `ID!` — The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. The edit changes the quantity on the line item.
- **`lineItemId`**: `ID!` — The ID of the calculated line item to edit.
- **`quantity`**: `Int!` — The new quantity to set for the line item. This value cannot be negative.
- **`restock`**: `Boolean` — Whether or not to restock the line item when the updated quantity is less than the original quantity.

## Payload Fields

- `calculatedLineItem`: `CalculatedLineItem` — The calculated line item with the edits applied but not saved.
- `calculatedOrder`: `CalculatedOrder` — The calculated order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedLineItem](../types/objects/CalculatedLineItem.md)
- [CalculatedOrder](../types/objects/CalculatedOrder.md)
- [OrderEditSession](../types/objects/OrderEditSession.md)
- [OrderEditSetQuantityPayload](../types/objects/OrderEditSetQuantityPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderEditSetQuantity($id: ID!, $lineItemId: ID!, $quantity: Int!, $restock: Boolean) {
  orderEditSetQuantity(id: $id, lineItemId: $lineItemId, quantity: $quantity, restock: $restock) {
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
