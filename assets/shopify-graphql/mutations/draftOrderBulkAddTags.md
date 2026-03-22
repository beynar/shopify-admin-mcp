# Mutation: `draftOrderBulkAddTags`

**Returns:** `DraftOrderBulkAddTagsPayload`

Adds tags to multiple draft orders.

## Arguments

- **`search`**: `String` — The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of the draft order saved search for filtering draft orders on.
- **`ids`**: `[ID!]` — The IDs of the draft orders to add tags to.
- **`tags`**: `[String!]!` — List of tags to be added.

## Payload Fields

- `job`: `Job` — The asynchronous job for adding tags to the draft orders.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrderBulkAddTagsPayload](../types/objects/DraftOrderBulkAddTagsPayload.md)
- [Job](../types/objects/Job.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderBulkAddTags($search: String, $savedSearchId: ID, $ids: [ID!], $tags: [String!]!) {
  draftOrderBulkAddTags(search: $search, savedSearchId: $savedSearchId, ids: $ids, tags: $tags) {
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
