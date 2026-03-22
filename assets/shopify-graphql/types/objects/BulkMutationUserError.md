# Object: `BulkMutationUserError`

Represents an error that happens during execution of a bulk mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `BulkMutationErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [BulkMutationErrorCode](../../types/enums/BulkMutationErrorCode.md)
