# Mutation: `draftOrderDelete`

**Returns:** `DraftOrderDeletePayload`

Deletes a draft order.

## Arguments

- **`input`**: `DraftOrderDeleteInput!` — Specify the draft order to delete by its ID.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted draft order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrderDeleteInput](../types/inputs/DraftOrderDeleteInput.md)
- [DraftOrderDeletePayload](../types/objects/DraftOrderDeletePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderDelete($input: DraftOrderDeleteInput!) {
  draftOrderDelete(input: $input) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
