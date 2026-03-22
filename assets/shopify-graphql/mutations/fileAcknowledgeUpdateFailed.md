# Mutation: `fileAcknowledgeUpdateFailed`

**Returns:** `FileAcknowledgeUpdateFailedPayload`

Acknowledges file update failure by resetting FAILED status to READY and clearing any media errors.

## Arguments

- **`fileIds`**: `[ID!]!` — Specifies the file(s) to acknowledge the failed updates of.

## Payload Fields

- `files`: `[File!]` — The updated file(s).
- `userErrors`: `[FilesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [File](../types/interfaces/File.md)
- [FileAcknowledgeUpdateFailedPayload](../types/objects/FileAcknowledgeUpdateFailedPayload.md)
- [FilesUserError](../types/objects/FilesUserError.md)

## Example Mutation

```graphql
mutation FileAcknowledgeUpdateFailed($fileIds: [ID!]!) {
  fileAcknowledgeUpdateFailed(fileIds: $fileIds) {
    files {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
