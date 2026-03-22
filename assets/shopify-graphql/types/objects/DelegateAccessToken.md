# Object: `DelegateAccessToken`

A token that delegates a set of scopes from the original permission.

To learn more about creating delegate access tokens, refer to
[Delegate OAuth access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

## Fields

- `accessScopes`: `[String!]!` — The list of permissions associated with the token.
- `accessToken`: `String!` — The issued delegate access token.
- `createdAt`: `DateTime!` — The date and time when the delegate access token was created.
