# Mutation: `urlRedirectUpdate`

**Returns:** `UrlRedirectUpdatePayload`

Updates a URL redirect.

## Arguments

- **`id`**: `ID!` — The ID of the URL redirect to update.
- **`urlRedirect`**: `UrlRedirectInput!` — The input fields required to update the URL redirect.

## Payload Fields

- `urlRedirect`: `UrlRedirect` — Returns the updated URL redirect.
- `userErrors`: `[UrlRedirectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [UrlRedirect](../types/objects/UrlRedirect.md)
- [UrlRedirectInput](../types/inputs/UrlRedirectInput.md)
- [UrlRedirectUpdatePayload](../types/objects/UrlRedirectUpdatePayload.md)
- [UrlRedirectUserError](../types/objects/UrlRedirectUserError.md)

## Example Mutation

```graphql
mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
  urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
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
