# Object: `VideoSource`

Represents a source for a Shopify hosted video.

Types of sources include the original video, lower resolution versions of the original video,
and an m3u8 playlist file.

Only [videos](https://shopify.dev/api/admin-graphql/latest/objects/video) with a status field
of [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready) have sources.

## Fields

- `fileSize`: `Int` — The video source's file size in bytes.
- `format`: `String!` — The video source's file format extension.
- `height`: `Int!` — The video source's height.
- `mimeType`: `String!` — The video source's MIME type.
- `url`: `String!` — The video source's URL.
- `width`: `Int!` — The video source's width.
