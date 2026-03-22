# Object: `MutationsStagedUploadTargetGenerateUploadParameter`

A signed upload parameter for uploading an asset to Shopify.

Deprecated in favor of
[StagedUploadParameter](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadParameter),
which is used in
[StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget)
and returned by the
[stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Fields

- `name`: `String!` — The upload parameter name.
- `value`: `String!` — The upload parameter value.
