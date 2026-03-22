# Mutation: `draftOrderBulkRemoveTags`

**Returns:** `DraftOrderBulkRemoveTagsPayload`

Removes tags from multiple draft orders.

## Arguments

- **`search`**: `String` — The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of the draft order saved search for filtering draft orders on.
- **`ids`**: `[ID!]` — The IDs of the draft orders to remove tags from.
- **`tags`**: `[String!]!` — List of tags to be removed.

## Payload Fields

- `job`: `Job` — The asynchronous job for removing tags from the draft orders.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrderBulkRemoveTagsPayload](../types/objects/DraftOrderBulkRemoveTagsPayload.md)
- [Job](../types/objects/Job.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderBulkRemoveTags($search: String, $savedSearchId: ID, $ids: [ID!], $tags: [String!]!) {
  draftOrderBulkRemoveTags(search: $search, savedSearchId: $savedSearchId, ids: $ids, tags: $tags) {
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
