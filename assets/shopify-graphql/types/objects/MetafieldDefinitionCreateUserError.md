# Object: `MetafieldDefinitionCreateUserError`

An error that occurs during the execution of `MetafieldDefinitionCreate`.

**Implements:** `DisplayableError`

## Fields

- `code`: `MetafieldDefinitionCreateUserErrorCode` — The error code.
- `elementIndex`: `Int` — The index of the array element that's causing the error.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [MetafieldDefinitionCreateUserErrorCode](../../types/enums/MetafieldDefinitionCreateUserErrorCode.md)
