# Mutation: `stagedUploadTargetsGenerate`

**Returns:** `StagedUploadTargetsGeneratePayload`

Uploads multiple images.

## Arguments

- **`input`**: `[StageImageInput!]!` — The input fields for generating staged uploads.

## Payload Fields

- `urls`: `[StagedUploadTarget!]` — The staged upload targets that were generated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [StageImageInput](../types/inputs/StageImageInput.md)
- [StagedUploadTarget](../types/objects/StagedUploadTarget.md)
- [StagedUploadTargetsGeneratePayload](../types/objects/StagedUploadTargetsGeneratePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation StagedUploadTargetsGenerate($input: [StageImageInput!]!) {
  stagedUploadTargetsGenerate(input: $input) {
    urls {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
