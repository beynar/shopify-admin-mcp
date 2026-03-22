# Object: `Model3d`

Represents a Shopify hosted 3D model.

**Implements:** `File`, `Media`, `Node`

## Fields

- `alt`: `String` — A word or phrase to describe the contents or the function of a file.
- `boundingBox`: `Model3dBoundingBox` — The 3d model's bounding box information.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
- `fileErrors`: `[FileError!]!` — Any errors that have occurred on the file.
- `fileStatus`: `FileStatus!` — The status of the file.
- `filename`: `String!` — The 3d model's filename.
- `id`: `ID!` — A globally-unique ID.
- `mediaContentType`: `MediaContentType!` — The media content type.
- `mediaErrors`: `[MediaError!]!` — Any errors which have occurred on the media.
- `mediaWarnings`: `[MediaWarning!]!` — The warnings attached to the media.
- `originalSource`: `Model3dSource` — The 3d model's original source.
- `preview`: `MediaPreviewImage` — The preview image for the media.
- `sources`: `[Model3dSource!]!` — The 3d model's sources.
- `status`: `MediaStatus!` — Current status of the media.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

## Related Types

- [FileError](../../types/objects/FileError.md)
- [FileStatus](../../types/enums/FileStatus.md)
- [MediaContentType](../../types/enums/MediaContentType.md)
- [MediaError](../../types/objects/MediaError.md)
- [MediaPreviewImage](../../types/objects/MediaPreviewImage.md)
- [MediaStatus](../../types/enums/MediaStatus.md)
- [MediaWarning](../../types/objects/MediaWarning.md)
- [Model3dBoundingBox](../../types/objects/Model3dBoundingBox.md)
- [Model3dSource](../../types/objects/Model3dSource.md)
