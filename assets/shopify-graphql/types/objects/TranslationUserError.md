# Object: `TranslationUserError`

Represents an error that happens during the execution of a translation mutation.

**Implements:** `DisplayableError`

## Fields

- `code`: `TranslationErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [TranslationErrorCode](../../types/enums/TranslationErrorCode.md)
