# Object: `MetafieldDefinitionUpdateUserError`

An error that occurs during the execution of `MetafieldDefinitionUpdate`.

**Implements:** `DisplayableError`

## Fields

- `code`: `MetafieldDefinitionUpdateUserErrorCode` — The error code.
- `elementIndex`: `Int` — The index of the array element that's causing the error.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [MetafieldDefinitionUpdateUserErrorCode](../../types/enums/MetafieldDefinitionUpdateUserErrorCode.md)
