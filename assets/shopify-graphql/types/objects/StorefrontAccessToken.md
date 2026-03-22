# Object: `StorefrontAccessToken`

A token that delegates unauthenticated access scopes to clients that need to access the [Storefront API](https://shopify.dev/docs/api/storefront). Storefront access tokens enable headless storefronts and custom applications to interact with a store on behalf of customers without requiring authentication.

The token provides specific permissions, such as reading [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) data, managing carts, or creating [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts. An app can have a maximum of 100 active storefront access tokens for each [`Shop`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop).

Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

**Implements:** `Node`

## Fields

- `accessScopes`: `[AccessScope!]!` — List of permissions associated with the token.
- `accessToken`: `String!` — The issued public access token.
- `createdAt`: `DateTime!` — The date and time when the public access token was created.
- `id`: `ID!` — A globally-unique ID.
- `title`: `String!` — An arbitrary title for each token determined by the developer, used for reference         purposes.
- `updatedAt`: `DateTime!` — The date and time when the storefront access token was updated.

## Related Types

- [AccessScope](../../types/objects/AccessScope.md)
