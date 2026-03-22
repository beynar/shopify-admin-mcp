# Query: `channel`

**Returns:** `Channel`

Returns a `Channel` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `Channel` to return.

## Return Type Fields

- `app`: `App!` — The underlying app used by the channel.
- `collectionPublicationsV3`: `ResourcePublicationConnection!` — The list of collection publications. Each record represents information about the publication of a collection.
- `collections`: `CollectionConnection!` — The list of collections published to the channel.
- `handle`: `String!` — The unique identifier for the channel.
- `hasCollection`: `Boolean!` — Whether the collection is available to the channel.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the channel.
- `productPublicationsV3`: `ResourcePublicationConnection!` — The list of product publication records for products published to this channel.
- `products`: `ProductConnection!` — The list of products published to the channel.
- `productsCount`: `Count` — Retrieves the total count of [`products`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) published to a specific sales channel. Limited to a maximum of 10000 by default.
- `supportsFuturePublishing`: `Boolean!` — Whether the channel supports future publishing.

## Related Types

- [App](../types/objects/App.md)
- [Channel](../types/objects/Channel.md)
- [Count](../types/objects/Count.md)
- [NavigationItem](../types/objects/NavigationItem.md)

## Example Query

```graphql
query Channel($id: ID!) {
  channel(id: $id) {
    handle
    hasCollection
    name
    supportsFuturePublishing
  }
}
```
