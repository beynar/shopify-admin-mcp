# Mutation: `storefrontAccessTokenDelete`

**Returns:** `StorefrontAccessTokenDeletePayload`

Deletes a storefront access token.

## Arguments

- **`input`**: `StorefrontAccessTokenDeleteInput!` — Provides the input fields required to delete a storefront access token.

## Payload Fields

- `deletedStorefrontAccessTokenId`: `ID` — The ID of the deleted storefront access token.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [StorefrontAccessTokenDeleteInput](../types/inputs/StorefrontAccessTokenDeleteInput.md)
- [StorefrontAccessTokenDeletePayload](../types/objects/StorefrontAccessTokenDeletePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation StorefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
  storefrontAccessTokenDelete(input: $input) {
    deletedStorefrontAccessTokenId
    userErrors {
      field
      message
    }
  }
}
```
