# Mutation: `urlRedirectCreate`

**Returns:** `UrlRedirectCreatePayload`

Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

## Arguments

- **`urlRedirect`**: `UrlRedirectInput!` — The fields to use when creating the redirect.

## Payload Fields

- `urlRedirect`: `UrlRedirect` — The created redirect.
- `userErrors`: `[UrlRedirectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [UrlRedirect](../types/objects/UrlRedirect.md)
- [UrlRedirectCreatePayload](../types/objects/UrlRedirectCreatePayload.md)
- [UrlRedirectInput](../types/inputs/UrlRedirectInput.md)
- [UrlRedirectUserError](../types/objects/UrlRedirectUserError.md)

## Example Mutation

```graphql
mutation UrlRedirectCreate($urlRedirect: UrlRedirectInput!) {
  urlRedirectCreate(urlRedirect: $urlRedirect) {
    urlRedirect {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
