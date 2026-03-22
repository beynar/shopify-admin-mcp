# Mutation: `urlRedirectBulkDeleteAll`

**Returns:** `UrlRedirectBulkDeleteAllPayload`

Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.

## Payload Fields

- `job`: `Job` — The asynchronous job removing the redirects.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [UrlRedirectBulkDeleteAllPayload](../types/objects/UrlRedirectBulkDeleteAllPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation {
  urlRedirectBulkDeleteAll {
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
