# Object: `MetaobjectUserError`

Defines errors encountered while managing metaobject resources.

**Implements:** `DisplayableError`

## Fields

- `code`: `MetaobjectUserErrorCode` — The error code.
- `elementIndex`: `Int` — The index of the failing list element in an array.
- `elementKey`: `String` — The key of the failing object element.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [MetaobjectUserErrorCode](../../types/enums/MetaobjectUserErrorCode.md)
