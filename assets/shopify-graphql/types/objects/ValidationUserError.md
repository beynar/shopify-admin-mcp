# Object: `ValidationUserError`

An error that occurs during the execution of a validation mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `ValidationUserErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [ValidationUserErrorCode](../../types/enums/ValidationUserErrorCode.md)
