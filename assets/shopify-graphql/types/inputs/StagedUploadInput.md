# Input Object: `StagedUploadInput`

The input fields for generating staged upload targets.

## Input Fields

- `resource`: `StagedUploadTargetGenerateUploadResource!` — The file's intended Shopify resource type.
- `filename`: `String!` — The file's name and extension.
- `mimeType`: `String!` — The file's MIME type.
- `httpMethod`: `StagedUploadHttpMethodType` = `PUT` — The HTTP method to be used when sending a request to upload the file using the returned staged
- `fileSize`: `UnsignedInt64` — The size of the file to upload, in bytes. This is required when the request's resource property is set to

## Related Types

- [StagedUploadHttpMethodType](../../types/enums/StagedUploadHttpMethodType.md)
- [StagedUploadTargetGenerateUploadResource](../../types/enums/StagedUploadTargetGenerateUploadResource.md)
