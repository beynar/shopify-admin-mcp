# Object: `FilesUserError`

An error that happens during the execution of a Files API query or mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `FilesErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [FilesErrorCode](../../types/enums/FilesErrorCode.md)
