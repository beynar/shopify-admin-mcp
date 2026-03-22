# Mutation: `urlRedirectBulkDeleteByIds`

**Returns:** `UrlRedirectBulkDeleteByIdsPayload`

Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) 
objects in bulk by IDs.
Learn more about [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) 
objects.

## Arguments

- **`ids`**: `[ID!]!` — A list of [`URLRedirect`](             https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect           ) object IDs to delete.

## Payload Fields

- `job`: `Job` — The asynchronous job removing the redirects.
- `userErrors`: `[UrlRedirectBulkDeleteByIdsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [UrlRedirectBulkDeleteByIdsPayload](../types/objects/UrlRedirectBulkDeleteByIdsPayload.md)
- [UrlRedirectBulkDeleteByIdsUserError](../types/objects/UrlRedirectBulkDeleteByIdsUserError.md)

## Example Mutation

```graphql
mutation UrlRedirectBulkDeleteByIds($ids: [ID!]!) {
  urlRedirectBulkDeleteByIds(ids: $ids) {
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
