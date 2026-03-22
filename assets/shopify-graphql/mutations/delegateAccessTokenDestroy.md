# Mutation: `delegateAccessTokenDestroy`

**Returns:** `DelegateAccessTokenDestroyPayload`

Destroys a delegate access token.

## Arguments

- **`accessToken`**: `String!` — Provides the delegate access token to destroy.

## Payload Fields

- `shop`: `Shop!` — The user's shop.
- `status`: `Boolean` — The status of the delegate access token destroy operation. Returns true if successful.
- `userErrors`: `[DelegateAccessTokenDestroyUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DelegateAccessTokenDestroyPayload](../types/objects/DelegateAccessTokenDestroyPayload.md)
- [DelegateAccessTokenDestroyUserError](../types/objects/DelegateAccessTokenDestroyUserError.md)
- [Shop](../types/objects/Shop.md)

## Example Mutation

```graphql
mutation DelegateAccessTokenDestroy($accessToken: String!) {
  delegateAccessTokenDestroy(accessToken: $accessToken) {
    shop {
      id
    }
    status
    userErrors {
      field
      message
    }
  }
}
```
