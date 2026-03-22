# Query: `publication`

**Returns:** `Publication`

Retrieves a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) by [`ID`](https://shopify.dev/docs/api/usage/gids).

Returns `null` if the publication doesn't exist.

## Arguments

- **`id`**: `ID!` — The ID of the Publication to return.

## Return Type Fields

- `autoPublish`: `Boolean!` — Whether new products are automatically published to this publication.
- `catalog`: `Catalog` — The catalog associated with the publication.
- `collectionPublicationsV3`: `ResourcePublicationConnection!` — The list of collection publication records, each representing the publication status and details for a collection published to this publication (typically channel).
- `collections`: `CollectionConnection!` — The list of collections published to the publication.
- `hasCollection`: `Boolean!` — Whether the collection is available to the publication.
- `id`: `ID!` — A globally-unique ID.
- `includedProducts`: `ProductConnection!` — The list of products included, but not necessarily published, in the publication.
- `includedProductsCount`: `Count` — The count of products included in the publication. Limited to a maximum of 10000 by default.
- `operation`: `PublicationOperation` — A background operation associated with this publication.
- `productPublicationsV3`: `ResourcePublicationConnection!` — The product publications for the list of products published to the publication.
- `products`: `ProductConnection!` — The list of products published to the publication.
- `supportsFuturePublishing`: `Boolean!` — Whether the publication supports future publishing.

## Related Types

- [App](../types/objects/App.md)
- [Catalog](../types/interfaces/Catalog.md)
- [Count](../types/objects/Count.md)
- [Publication](../types/objects/Publication.md)
- [PublicationOperation](../types/unions/PublicationOperation.md)

## Example Query

```graphql
query Publication($id: ID!) {
  publication(id: $id) {
    autoPublish
    hasCollection
    supportsFuturePublishing
  }
}
```
