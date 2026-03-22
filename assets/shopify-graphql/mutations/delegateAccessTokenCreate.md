# Mutation: `delegateAccessTokenCreate`

**Returns:** `DelegateAccessTokenCreatePayload`

Creates a [`DelegateAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken) with a subset of the parent token's permissions.

Delegate access tokens enable secure permission delegation to subsystems or services that need limited access to shop resources. Each token inherits only the scopes you specify, ensuring subsystems operate with minimal required permissions rather than full app access.

Learn more about [delegating access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

## Arguments

- **`input`**: `DelegateAccessTokenInput!` — The input fields for creating a delegate access token.

## Payload Fields

- `delegateAccessToken`: `DelegateAccessToken` — The delegate access token.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[DelegateAccessTokenCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DelegateAccessToken](../types/objects/DelegateAccessToken.md)
- [DelegateAccessTokenCreatePayload](../types/objects/DelegateAccessTokenCreatePayload.md)
- [DelegateAccessTokenCreateUserError](../types/objects/DelegateAccessTokenCreateUserError.md)
- [DelegateAccessTokenInput](../types/inputs/DelegateAccessTokenInput.md)
- [Shop](../types/objects/Shop.md)

## Example Mutation

```graphql
mutation DelegateAccessTokenCreate($input: DelegateAccessTokenInput!) {
  delegateAccessTokenCreate(input: $input) {
    delegateAccessToken {
      id
    }
    shop {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
