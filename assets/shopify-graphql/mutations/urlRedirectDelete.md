# Mutation: `urlRedirectDelete`

**Returns:** `UrlRedirectDeletePayload`

Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

## Arguments

- **`id`**: `ID!` — The ID of the redirect to delete.

## Payload Fields

- `deletedUrlRedirectId`: `ID` — The ID of the deleted redirect.
- `userErrors`: `[UrlRedirectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [UrlRedirectDeletePayload](../types/objects/UrlRedirectDeletePayload.md)
- [UrlRedirectUserError](../types/objects/UrlRedirectUserError.md)

## Example Mutation

```graphql
mutation UrlRedirectDelete($id: ID!) {
  urlRedirectDelete(id: $id) {
    deletedUrlRedirectId
    userErrors {
      field
      message
    }
  }
}
```
