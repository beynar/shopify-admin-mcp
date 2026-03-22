# Query: `draftOrderTag`

**Returns:** `DraftOrderTag`

Returns a `DraftOrderTag` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `DraftOrderTag` to return.

## Return Type Fields

- `handle`: `String!` — Handle of draft order tag.
- `id`: `ID!` — ID of draft order tag.
- `title`: `String!` — Title of draft order tag.

## Related Types

- [DraftOrderTag](../types/objects/DraftOrderTag.md)

## Example Query

```graphql
query DraftOrderTag($id: ID!) {
  draftOrderTag(id: $id) {
    handle
    title
  }
}
```
