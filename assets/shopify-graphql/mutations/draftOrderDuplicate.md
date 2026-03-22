# Mutation: `draftOrderDuplicate`

**Returns:** `DraftOrderDuplicatePayload`

Duplicates a draft order.

## Arguments

- **`id`**: `ID` — The ID of the draft order to duplicate.

## Payload Fields

- `draftOrder`: `DraftOrder` — The newly duplicated draft order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrder](../types/objects/DraftOrder.md)
- [DraftOrderDuplicatePayload](../types/objects/DraftOrderDuplicatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderDuplicate($id: ID) {
  draftOrderDuplicate(id: $id) {
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
