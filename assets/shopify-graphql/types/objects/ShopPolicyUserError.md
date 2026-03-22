# Object: `ShopPolicyUserError`

An error that occurs during the execution of a shop policy mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `ShopPolicyErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [ShopPolicyErrorCode](../../types/enums/ShopPolicyErrorCode.md)
