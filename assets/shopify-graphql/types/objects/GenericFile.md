# Object: `GenericFile`

Represents any file other than HTML.

**Implements:** `File`, `Node`

## Fields

- `alt`: `String` — A word or phrase to describe the contents or the function of a file.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
- `fileErrors`: `[FileError!]!` — Any errors that have occurred on the file.
- `fileStatus`: `FileStatus!` — The status of the file.
- `id`: `ID!` — A globally-unique ID.
- `mimeType`: `String` — The generic file's MIME type.
- `originalFileSize`: `Int` — The generic file's size in bytes.
- `preview`: `MediaPreviewImage` — The preview image for the media.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.
- `url`: `URL` — The generic file's URL.

## Related Types

- [FileError](../../types/objects/FileError.md)
- [FileStatus](../../types/enums/FileStatus.md)
- [MediaPreviewImage](../../types/objects/MediaPreviewImage.md)
