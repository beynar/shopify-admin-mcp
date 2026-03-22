# Query: `segment`

**Returns:** `Segment`

Retrieves a customer [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) by ID. Segments are dynamic groups of customers that meet specific criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference).

Use segments for targeted marketing campaigns, analyzing customer behavior, or creating personalized experiences. Each segment includes its name, creation date, and the query that defines which [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects belong to it.

## Arguments

- **`id`**: `ID!` — Find a segment by ID.

## Return Type Fields

- `creationDate`: `DateTime!` — The date and time when the segment was added to the store.
- `id`: `ID!` — A globally-unique ID.
- `lastEditDate`: `DateTime!` — The date and time when the segment was last updated.
- `name`: `String!` — The name of the segment.
- `query`: `String!` — A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers.

## Related Types

- [Segment](../types/objects/Segment.md)

## Example Query

```graphql
query Segment($id: ID!) {
  segment(id: $id) {
    creationDate
    lastEditDate
    name
    query
  }
}
```
