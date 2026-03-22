# Object: `PublicationUserError`

Defines errors encountered while managing a publication.

**Implements:** `DisplayableError`

## Fields

- `code`: `PublicationUserErrorCode` — The error code.
- `field`: `[String!]` — The path to the input field that caused the error.
- `message`: `String!` — The error message.

## Related Types

- [PublicationUserErrorCode](../../types/enums/PublicationUserErrorCode.md)
