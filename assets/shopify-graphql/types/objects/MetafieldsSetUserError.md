# Object: `MetafieldsSetUserError`

An error that occurs during the execution of `MetafieldsSet`.

**Implements:** `DisplayableError`

## Fields

- `code`: `MetafieldsSetUserErrorCode` — The error code.
- `elementIndex`: `Int` — The index of the array element that's causing the error.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [MetafieldsSetUserErrorCode](../../types/enums/MetafieldsSetUserErrorCode.md)
