# Query: `assignedFulfillmentOrders`

**Returns:** `FulfillmentOrderConnection!`

The paginated list of fulfillment orders assigned to the shop locations owned by the app.

Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations
managed by
[fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService)
that are registered by the app.
One app (api_client) can host multiple fulfillment services on a shop.
Each fulfillment service manages a dedicated location on a shop.
Assigned fulfillment orders can have associated
[fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus),
or might currently not be requested to be fulfilled.

The app must have the `read_assigned_fulfillment_orders`
[access scope](https://shopify.dev/docs/api/usage/access-scopes)
to be able to retrieve the fulfillment orders assigned to its locations.

All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default.
Perform filtering with the `assignmentStatus` argument
to receive only fulfillment orders that have been requested to be fulfilled.

## Arguments

- **`assignmentStatus`**: `FulfillmentOrderAssignmentStatus` — The assigment status of the fulfillment orders that should be returned. If `assignmentStatus` argument is not provided, then the query will return all assigned fulfillment orders, except those that have the `CLOSED` status.
- **`locationIds`**: `[ID!]` — Returns fulfillment orders only for certain locations, specified by a list of location IDs.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `FulfillmentOrderSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

## Return Type Fields

- `edges`: `[FulfillmentOrderEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[FulfillmentOrder!]!` — A list of nodes that are contained in FulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderAssignmentStatus](../types/enums/FulfillmentOrderAssignmentStatus.md)
- [FulfillmentOrderSortKeys](../types/enums/FulfillmentOrderSortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query AssignedFulfillmentOrders($assignmentStatus: FulfillmentOrderAssignmentStatus, $locationIds: [ID!], $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: FulfillmentOrderSortKeys) {
  assignedFulfillmentOrders(assignmentStatus: $assignmentStatus, locationIds: $locationIds, first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey) {
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
