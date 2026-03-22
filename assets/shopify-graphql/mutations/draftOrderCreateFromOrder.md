# Mutation: `draftOrderCreateFromOrder`

**Returns:** `DraftOrderCreateFromOrderPayload`

Creates a draft order from order.

## Arguments

- **`orderId`**: `ID!` — Specifies the order's id that we create the draft order from.

## Payload Fields

- `draftOrder`: `DraftOrder` — The created draft order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrder](../types/objects/DraftOrder.md)
- [DraftOrderCreateFromOrderPayload](../types/objects/DraftOrderCreateFromOrderPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderCreateFromOrder($orderId: ID!) {
  draftOrderCreateFromOrder(orderId: $orderId) {
    draftOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
