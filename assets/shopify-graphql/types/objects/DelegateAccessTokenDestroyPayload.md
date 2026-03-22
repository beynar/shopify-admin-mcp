# Object: `DelegateAccessTokenDestroyPayload`

Return type for `delegateAccessTokenDestroy` mutation.

## Fields

- `shop`: `Shop!` — The user's shop.
- `status`: `Boolean` — The status of the delegate access token destroy operation. Returns true if successful.
- `userErrors`: `[DelegateAccessTokenDestroyUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DelegateAccessTokenDestroyUserError](../../types/objects/DelegateAccessTokenDestroyUserError.md)
- [Shop](../../types/objects/Shop.md)
