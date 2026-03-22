# Object: `BillingAttemptUserError`

Represents an error that happens during the execution of a billing attempt mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `BillingAttemptUserErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [BillingAttemptUserErrorCode](../../types/enums/BillingAttemptUserErrorCode.md)
