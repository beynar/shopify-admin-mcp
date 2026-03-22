# Object: `Model3dSource`

A source for a Shopify-hosted 3d model.

Types of sources include GLB and USDZ formatted 3d models, where the former
is an original 3d model and the latter has been converted from the original.

If the original source is in GLB format and over 15 MBs in size, then both the
original and the USDZ formatted source are optimized to reduce the file size.

## Fields

- `filesize`: `Int!` — The 3d model source's filesize.
- `format`: `String!` — The 3d model source's format.
- `mimeType`: `String!` — The 3d model source's MIME type.
- `url`: `String!` — The 3d model source's URL.
