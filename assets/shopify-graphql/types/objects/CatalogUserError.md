# Object: `CatalogUserError`

Defines errors encountered while managing a catalog.

**Implements:** `DisplayableError`

## Fields

- `code`: `CatalogUserErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [CatalogUserErrorCode](../../types/enums/CatalogUserErrorCode.md)
