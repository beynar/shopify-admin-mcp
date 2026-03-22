# Mutation: `segmentUpdate`

**Returns:** `SegmentUpdatePayload`

Updates a segment.

## Arguments

- **`id`**: `ID!` — Specifies the segment to be updated.
- **`name`**: `String` — The new name for the segment.
- **`query`**: `String` — A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

## Payload Fields

- `segment`: `Segment` — The updated segment.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Segment](../types/objects/Segment.md)
- [SegmentUpdatePayload](../types/objects/SegmentUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation SegmentUpdate($id: ID!, $name: String, $query: String) {
  segmentUpdate(id: $id, name: $name, query: $query) {
    segment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
