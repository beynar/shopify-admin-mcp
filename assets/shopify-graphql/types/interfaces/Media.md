# Interface: `Media`

Represents a media interface.

## Fields

- `alt`: `String` — A word or phrase to share the nature or contents of a media.
- `id`: `ID!` — A globally-unique ID.
- `mediaContentType`: `MediaContentType!` — The media content type.
- `mediaErrors`: `[MediaError!]!` — Any errors which have occurred on the media.
- `mediaWarnings`: `[MediaWarning!]!` — The warnings attached to the media.
- `preview`: `MediaPreviewImage` — The preview image for the media.
- `status`: `MediaStatus!` — Current status of the media.

## Possible Types

- [ExternalVideo](../../types/objects/ExternalVideo.md)
- [MediaImage](../../types/objects/MediaImage.md)
- [Model3d](../../types/objects/Model3d.md)
- [Video](../../types/objects/Video.md)

## Related Types

- [MediaContentType](../../types/enums/MediaContentType.md)
- [MediaError](../../types/objects/MediaError.md)
- [MediaPreviewImage](../../types/objects/MediaPreviewImage.md)
- [MediaStatus](../../types/enums/MediaStatus.md)
- [MediaWarning](../../types/objects/MediaWarning.md)
