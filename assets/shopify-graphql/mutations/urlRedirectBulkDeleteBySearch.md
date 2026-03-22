# Mutation: `urlRedirectBulkDeleteBySearch`

**Returns:** `UrlRedirectBulkDeleteBySearchPayload`

Asynchronously delete redirects in bulk.

## Arguments

- **`search`**: `String!` — Search query for filtering redirects on (both Redirect from and Redirect to fields).

## Payload Fields

- `job`: `Job` — The asynchronous job removing the redirects.
- `userErrors`: `[UrlRedirectBulkDeleteBySearchUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [UrlRedirectBulkDeleteBySearchPayload](../types/objects/UrlRedirectBulkDeleteBySearchPayload.md)
- [UrlRedirectBulkDeleteBySearchUserError](../types/objects/UrlRedirectBulkDeleteBySearchUserError.md)

## Example Mutation

```graphql
mutation UrlRedirectBulkDeleteBySearch($search: String!) {
  urlRedirectBulkDeleteBySearch(search: $search) {
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
