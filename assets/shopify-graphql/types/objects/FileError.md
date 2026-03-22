# Object: `FileError`

A file error. This typically occurs when there is an issue with the file itself causing it to fail validation.
Check the file before attempting to upload again.

## Fields

- `code`: `FileErrorCode!` — Code representing the type of error.
- `details`: `String` — Additional details regarding the error.
- `message`: `String!` — Translated error message.

## Related Types

- [FileErrorCode](../../types/enums/FileErrorCode.md)
