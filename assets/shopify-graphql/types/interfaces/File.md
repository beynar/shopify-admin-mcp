# Interface: `File`

A file interface.

## Fields

- `alt`: `String` — A word or phrase to describe the contents or the function of a file.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
- `fileErrors`: `[FileError!]!` — Any errors that have occurred on the file.
- `fileStatus`: `FileStatus!` — The status of the file.
- `id`: `ID!` — A globally-unique ID.
- `preview`: `MediaPreviewImage` — The preview image for the media.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

## Possible Types

- [ExternalVideo](../../types/objects/ExternalVideo.md)
- [GenericFile](../../types/objects/GenericFile.md)
- [MediaImage](../../types/objects/MediaImage.md)
- [Model3d](../../types/objects/Model3d.md)
- [Video](../../types/objects/Video.md)

## Related Types

- [FileError](../../types/objects/FileError.md)
- [FileStatus](../../types/enums/FileStatus.md)
- [MediaPreviewImage](../../types/objects/MediaPreviewImage.md)
