# Object: `ReturnUserError`

An error that occurs during the execution of a return mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `ReturnErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [ReturnErrorCode](../../types/enums/ReturnErrorCode.md)
