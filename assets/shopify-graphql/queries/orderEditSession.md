# Query: `orderEditSession`

**Returns:** `OrderEditSession`

Returns a `OrderEditSession` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `OrderEditSession` to return.

## Return Type Fields

- `id`: `ID!` — The unique ID of the order edit session.

## Related Types

- [OrderEditSession](../types/objects/OrderEditSession.md)

## Example Query

```graphql
query OrderEditSession($id: ID!) {
  orderEditSession(id: $id) {
  }
}
```
