# Query: `node`

**Returns:** `Node`

Returns a specific node (any object that implements the
[Node](https://shopify.dev/api/admin-graphql/latest/interfaces/Node)
interface) by ID, in accordance with the
[Relay specification](https://relay.dev/docs/guides/graphql-server-specification/#object-identification).
This field is commonly used for refetching an object.

## Arguments

- **`id`**: `ID!` — The ID of the `Node` to return.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.

## Related Types

- [Node](../types/interfaces/Node.md)

## Example Query

```graphql
query Node($id: ID!) {
  node(id: $id) {
  }
}
```
