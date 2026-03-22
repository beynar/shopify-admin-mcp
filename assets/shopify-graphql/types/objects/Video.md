# Object: `Video`

Represents a Shopify hosted video.

**Implements:** `File`, `Media`, `Node`

## Fields

- `alt`: `String` — A word or phrase to share the nature or contents of a media.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
- `duration`: `Int` — The video's duration in milliseconds. This value is `null` unless the video's status field is
- `fileErrors`: `[FileError!]!` — Any errors that have occurred on the file.
- `fileStatus`: `FileStatus!` — The status of the file.
- `filename`: `String!` — The video's filename.
- `id`: `ID!` — A globally-unique ID.
- `mediaContentType`: `MediaContentType!` — The media content type.
- `mediaErrors`: `[MediaError!]!` — Any errors which have occurred on the media.
- `mediaWarnings`: `[MediaWarning!]!` — The warnings attached to the media.
- `originalSource`: `VideoSource` — The video's original source. This value is `null` unless the video's status field is
- `preview`: `MediaPreviewImage` — The preview image for the media.
- `sources`: `[VideoSource!]!` — The video's sources. This value is empty unless the video's status field is
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
- [VideoSource](../../types/objects/VideoSource.md)
