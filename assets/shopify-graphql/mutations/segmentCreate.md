# Mutation: `segmentCreate`

**Returns:** `SegmentCreatePayload`

Creates a segment.

## Arguments

- **`name`**: `String!` — The name of the segment to be created. Segment names must be unique.
- **`query`**: `String!` — A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

## Payload Fields

- `segment`: `Segment` — The newly created segment.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Segment](../types/objects/Segment.md)
- [SegmentCreatePayload](../types/objects/SegmentCreatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation SegmentCreate($name: String!, $query: String!) {
  segmentCreate(name: $name, query: $query) {
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
