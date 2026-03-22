# Object: `DiscountUserError`

An error that occurs during the execution of a discount mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `DiscountErrorCode` — The error code.
- `extraInfo`: `String` — Extra information about this error.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [DiscountErrorCode](../../types/enums/DiscountErrorCode.md)
