# Mutation: `urlRedirectBulkDeleteBySavedSearch`

**Returns:** `UrlRedirectBulkDeleteBySavedSearchPayload`

Asynchronously delete redirects in bulk.

## Arguments

- **`savedSearchId`**: `ID!` — The ID of the URL redirect saved search for filtering.

## Payload Fields

- `job`: `Job` — The asynchronous job removing the redirects.
- `userErrors`: `[UrlRedirectBulkDeleteBySavedSearchUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [UrlRedirectBulkDeleteBySavedSearchPayload](../types/objects/UrlRedirectBulkDeleteBySavedSearchPayload.md)
- [UrlRedirectBulkDeleteBySavedSearchUserError](../types/objects/UrlRedirectBulkDeleteBySavedSearchUserError.md)

## Example Mutation

```graphql
mutation UrlRedirectBulkDeleteBySavedSearch($savedSearchId: ID!) {
  urlRedirectBulkDeleteBySavedSearch(savedSearchId: $savedSearchId) {
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
