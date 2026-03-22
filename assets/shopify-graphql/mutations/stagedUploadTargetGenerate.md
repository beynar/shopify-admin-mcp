# Mutation: `stagedUploadTargetGenerate`

**Returns:** `StagedUploadTargetGeneratePayload`

Generates the URL and signed paramaters needed to upload an asset to Shopify.

## Arguments

- **`input`**: `StagedUploadTargetGenerateInput!` — The input fields for generating a staged upload.

## Payload Fields

- `parameters`: `[MutationsStagedUploadTargetGenerateUploadParameter!]!` — The signed parameters that can be used to upload the asset.
- `url`: `String!` — The signed URL where the asset can be uploaded.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MutationsStagedUploadTargetGenerateUploadParameter](../types/objects/MutationsStagedUploadTargetGenerateUploadParameter.md)
- [StagedUploadTargetGenerateInput](../types/inputs/StagedUploadTargetGenerateInput.md)
- [StagedUploadTargetGeneratePayload](../types/objects/StagedUploadTargetGeneratePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation StagedUploadTargetGenerate($input: StagedUploadTargetGenerateInput!) {
  stagedUploadTargetGenerate(input: $input) {
    parameters {
      id
    }
    url
    userErrors {
      field
      message
    }
  }
}
```
