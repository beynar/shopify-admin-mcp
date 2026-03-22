# Mutation: `storefrontAccessTokenCreate`

**Returns:** `StorefrontAccessTokenCreatePayload`

Creates a storefront access token that delegates unauthenticated access scopes to clients using the [Storefront API](https://shopify.dev/docs/api/storefront). The token provides public access to storefront resources without requiring customer authentication.

Each shop can have up to 100 active [`StorefrontAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken) objects. Headless storefronts, mobile apps, and other client applications typically use these tokens to access public storefront data.

Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

## Arguments

- **`input`**: `StorefrontAccessTokenInput!` — Provides the input fields for creating a storefront access token.

## Payload Fields

- `shop`: `Shop!` — The user's shop.
- `storefrontAccessToken`: `StorefrontAccessToken` — The storefront access token.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Shop](../types/objects/Shop.md)
- [StorefrontAccessToken](../types/objects/StorefrontAccessToken.md)
- [StorefrontAccessTokenCreatePayload](../types/objects/StorefrontAccessTokenCreatePayload.md)
- [StorefrontAccessTokenInput](../types/inputs/StorefrontAccessTokenInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
  storefrontAccessTokenCreate(input: $input) {
    shop {
      id
    }
    storefrontAccessToken {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
