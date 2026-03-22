# Input Object: `StageImageInput`

An image to be uploaded.

Deprecated in favor of
[StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput),
which is used by the
[stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Input Fields

- `resource`: `StagedUploadTargetGenerateUploadResource!` — The image resource.
- `filename`: `String!` — The image filename.
- `mimeType`: `String!` — The image MIME type.
- `httpMethod`: `StagedUploadHttpMethodType` = `PUT` — HTTP method to be used by the staged upload.

## Related Types

- [StagedUploadHttpMethodType](../../types/enums/StagedUploadHttpMethodType.md)
- [StagedUploadTargetGenerateUploadResource](../../types/enums/StagedUploadTargetGenerateUploadResource.md)
