# Object: `StagedUploadTargetGeneratePayload`

Return type for `stagedUploadTargetGenerate` mutation.

## Fields

- `parameters`: `[MutationsStagedUploadTargetGenerateUploadParameter!]!` — The signed parameters that can be used to upload the asset.
- `url`: `String!` — The signed URL where the asset can be uploaded.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MutationsStagedUploadTargetGenerateUploadParameter](../../types/objects/MutationsStagedUploadTargetGenerateUploadParameter.md)
- [UserError](../../types/objects/UserError.md)
