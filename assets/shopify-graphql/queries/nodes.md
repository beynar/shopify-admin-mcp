# Query: `nodes`

**Returns:** `[Node]!`

Returns the list of nodes (any objects that implement the
[Node](https://shopify.dev/api/admin-graphql/latest/interfaces/Node)
interface) with the given IDs, in accordance with the
[Relay specification](https://relay.dev/docs/guides/graphql-server-specification/#object-identification).

## Arguments

- **`ids`**: `[ID!]!` — The IDs of the Nodes to return.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.

## Related Types

- [Node](../types/interfaces/Node.md)

## Example Query

```graphql
query Nodes($ids: [ID!]!) {
  nodes(ids: $ids) {
  }
}
```
