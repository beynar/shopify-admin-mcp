# Query: `deliveryPromiseParticipants`

**Returns:** `DeliveryPromiseParticipantConnection`

Returns delivery promise participants.

## Arguments

- **`ownerIds`**: `[ID!]` — The product variant ID to filter by.
- **`brandedPromiseHandle`**: `String!` — The branded promise handle to filter by.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.

## Return Type Fields

- `edges`: `[DeliveryPromiseParticipantEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[DeliveryPromiseParticipant!]!` — A list of nodes that are contained in DeliveryPromiseParticipantEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [DeliveryPromiseParticipant](../types/objects/DeliveryPromiseParticipant.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query DeliveryPromiseParticipants($ownerIds: [ID!], $brandedPromiseHandle: String!, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean) {
  deliveryPromiseParticipants(ownerIds: $ownerIds, brandedPromiseHandle: $brandedPromiseHandle, first: $first, after: $after, last: $last, before: $before, reverse: $reverse) {
    nodes {
      id
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```
