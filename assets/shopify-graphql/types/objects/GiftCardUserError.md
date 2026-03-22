# Object: `GiftCardUserError`

Represents an error that happens during the execution of a gift card mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `GiftCardErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [GiftCardErrorCode](../../types/enums/GiftCardErrorCode.md)
