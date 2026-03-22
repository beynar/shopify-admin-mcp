# Object: `StagedUploadTarget`

Information about the staged target.

Deprecated in favor of
[StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget),
which is returned by the
[stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Fields

- `parameters`: `[ImageUploadParameter!]!` — The parameters of an image to be uploaded.
- `url`: `String!` — The image URL.

## Related Types

- [ImageUploadParameter](../../types/objects/ImageUploadParameter.md)
