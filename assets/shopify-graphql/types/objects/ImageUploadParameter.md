# Object: `ImageUploadParameter`

A parameter to upload an image.

Deprecated in favor of
[StagedUploadParameter](https://shopify.dev/api/admin-graphql/latest/objects/StagedUploadParameter),
which is used in
[StagedMediaUploadTarget](https://shopify.dev/api/admin-graphql/latest/objects/StagedMediaUploadTarget)
and returned by the
[stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stagedUploadsCreate).

## Fields

- `name`: `String!` — The parameter name.
- `value`: `String!` — The parameter value.
