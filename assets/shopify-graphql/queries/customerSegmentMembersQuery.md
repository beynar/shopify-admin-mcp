# Query: `customerSegmentMembersQuery`

**Returns:** `CustomerSegmentMembersQuery`

Returns a `CustomerSegmentMembersQuery` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `CustomerSegmentMembersQuery` to return.

## Return Type Fields

- `currentCount`: `Int!` — The current total number of members in a given segment.
- `done`: `Boolean!` — This indicates if the job is still queued or has been run.
- `id`: `ID!` — A globally-unique ID that's returned when running an asynchronous mutation.

## Related Types

- [CustomerSegmentMembersQuery](../types/objects/CustomerSegmentMembersQuery.md)

## Example Query

```graphql
query CustomerSegmentMembersQuery($id: ID!) {
  customerSegmentMembersQuery(id: $id) {
    currentCount
    done
  }
}
```
