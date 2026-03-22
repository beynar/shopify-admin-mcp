# Object: `Publication`

A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

**Implements:** `Node`

## Fields

- `app`: `App!` *(deprecated)* — The app associated with the publication.
- `autoPublish`: `Boolean!` — Whether new products are automatically published to this publication.
- `catalog`: `Catalog` — The catalog associated with the publication.
- `collectionPublicationsV3` `(first, after, last, before, reverse)`: `ResourcePublicationConnection!` — The list of collection publication records, each representing the publication status and details for a collection published to this publication (typically channel).
- `collections` `(first, after, last, before, reverse)`: `CollectionConnection!` — The list of collections published to the publication.
- `hasCollection` `(id)`: `Boolean!` — Whether the collection is available to the publication.
- `id`: `ID!` — A globally-unique ID.
- `includedProducts` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`: `ProductConnection!` — The list of products included, but not necessarily published, in the publication.
- `includedProductsCount` `(query, savedSearchId, limit)`: `Count` — The count of products included in the publication. Limited to a maximum of 10000 by default.
- `name`: `String!` *(deprecated)* — Name of the publication.
- `operation`: `PublicationOperation` — A background operation associated with this publication.
- `productPublicationsV3` `(first, after, last, before, reverse)`: `ResourcePublicationConnection!` — The product publications for the list of products published to the publication.
- `products` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`: `ProductConnection!` — The list of products published to the publication.
- `supportsFuturePublishing`: `Boolean!` — Whether the publication supports future publishing.

## Related Types

- [App](../../types/objects/App.md)
- [Catalog](../../types/interfaces/Catalog.md)
- [Count](../../types/objects/Count.md)
- [ProductSortKeys](../../types/enums/ProductSortKeys.md)
- [PublicationOperation](../../types/unions/PublicationOperation.md)
