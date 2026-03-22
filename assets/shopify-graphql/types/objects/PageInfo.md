# Object: `PageInfo`

Returns information about pagination in a connection, in accordance with the
[Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).

## Fields

- `endCursor`: `String` — The cursor corresponding to the last node in edges.
- `hasNextPage`: `Boolean!` — Whether there are more pages to fetch following the current page.
- `hasPreviousPage`: `Boolean!` — Whether there are any pages prior to the current page.
- `startCursor`: `String` — The cursor corresponding to the first node in edges.
