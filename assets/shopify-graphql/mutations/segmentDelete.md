# Mutation: `segmentDelete`

**Returns:** `SegmentDeletePayload`

Deletes a segment.

## Arguments

- **`id`**: `ID!` — Specifies the segment to delete.

## Payload Fields

- `deletedSegmentId`: `ID` — ID of the deleted segment.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SegmentDeletePayload](../types/objects/SegmentDeletePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation SegmentDelete($id: ID!) {
  segmentDelete(id: $id) {
    deletedSegmentId
    userErrors {
      field
      message
    }
  }
}
```
