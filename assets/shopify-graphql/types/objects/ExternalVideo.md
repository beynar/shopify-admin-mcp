# Object: `ExternalVideo`

Represents a video hosted outside of Shopify.

**Implements:** `File`, `Media`, `Node`

## Fields

- `alt`: `String` — A word or phrase to describe the contents or the function of a file.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
- `embedUrl`: `URL!` — The embed URL of the video for the respective host.
- `embeddedUrl`: `URL!` *(deprecated)* — The URL.
- `fileErrors`: `[FileError!]!` — Any errors that have occurred on the file.
- `fileStatus`: `FileStatus!` — The status of the file.
- `host`: `MediaHost!` — The host of the external video.
- `id`: `ID!` — A globally-unique ID.
- `mediaContentType`: `MediaContentType!` — The media content type.
- `mediaErrors`: `[MediaError!]!` — Any errors which have occurred on the media.
- `mediaWarnings`: `[MediaWarning!]!` — The warnings attached to the media.
- `originUrl`: `URL!` — The origin URL of the video on the respective host.
- `preview`: `MediaPreviewImage` — The preview image for the media.
- `status`: `MediaStatus!` — Current status of the media.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

## Related Types

- [FileError](../../types/objects/FileError.md)
- [FileStatus](../../types/enums/FileStatus.md)
- [MediaContentType](../../types/enums/MediaContentType.md)
- [MediaError](../../types/objects/MediaError.md)
- [MediaHost](../../types/enums/MediaHost.md)
- [MediaPreviewImage](../../types/objects/MediaPreviewImage.md)
- [MediaStatus](../../types/enums/MediaStatus.md)
- [MediaWarning](../../types/objects/MediaWarning.md)
