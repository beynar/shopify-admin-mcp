# Input Object: `StagedUploadTargetGenerateInput`

The required fields and parameters to generate the URL upload an"
asset to Shopify.

Deprecated in favor of
[StagedUploadInput](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadInput),
which is used by the
[stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Input Fields

- `resource`: `StagedUploadTargetGenerateUploadResource!` — The resource type being uploaded.
- `filename`: `String!` — The filename of the asset being uploaded.
- `mimeType`: `String!` — The MIME type of the asset being uploaded.
- `httpMethod`: `StagedUploadHttpMethodType` = `PUT` — The HTTP method to be used by the staged upload.
- `fileSize`: `UnsignedInt64` — The size of the file to upload, in bytes.

## Related Types

- [StagedUploadHttpMethodType](../../types/enums/StagedUploadHttpMethodType.md)
- [StagedUploadTargetGenerateUploadResource](../../types/enums/StagedUploadTargetGenerateUploadResource.md)
