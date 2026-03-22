# Object: `MediaError`

Represents a media error. This typically occurs when there is an issue with the media itself causing it to fail validation.
Check the media before attempting to upload again.

## Fields

- `code`: `MediaErrorCode!` — Code representing the type of error.
- `details`: `String` — Additional details regarding the error.
- `message`: `String!` — Translated error message.

## Related Types

- [MediaErrorCode](../../types/enums/MediaErrorCode.md)
