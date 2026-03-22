# Mutation: `draftOrderBulkDelete`

**Returns:** `DraftOrderBulkDeletePayload`

Deletes multiple draft orders.

## Arguments

- **`search`**: `String` — The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of the draft order saved search for filtering draft orders on.
- **`ids`**: `[ID!]` — The IDs of the draft orders to delete.

## Payload Fields

- `job`: `Job` — The asynchronous job for deleting the draft orders.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrderBulkDeletePayload](../types/objects/DraftOrderBulkDeletePayload.md)
- [Job](../types/objects/Job.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderBulkDelete($search: String, $savedSearchId: ID, $ids: [ID!]) {
  draftOrderBulkDelete(search: $search, savedSearchId: $savedSearchId, ids: $ids) {
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
