# Object: `Channel`

An authenticated link to an external platform that supports syndication and optionally order ingestion, such as Facebook, Pinterest, an online store, or Point of Sale (POS).

Each channel provides access to its underlying [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App), published products and collections, and [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings, as well as what features of the platform it supports such as [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing). Use channels to manage where catalog items appear, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different customer touchpoints.

**Implements:** `Node`

## Fields

- `app`: `App!` — The underlying app used by the channel.
- `collectionPublicationsV3` `(first, after, last, before, reverse)`: `ResourcePublicationConnection!` — The list of collection publications. Each record represents information about the publication of a collection.
- `collections` `(first, after, last, before, reverse)`: `CollectionConnection!` — The list of collections published to the channel.
- `handle`: `String!` — The unique identifier for the channel.
- `hasCollection` `(id)`: `Boolean!` — Whether the collection is available to the channel.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the channel.
- `navigationItems`: `[NavigationItem!]!` *(deprecated)* — The menu items for the channel, which also appear as submenu items in the left navigation sidebar in the Shopify admin.
- `overviewPath`: `URL` *(deprecated)* — Home page for the channel.
- `productPublications` `(first, after, last, before, reverse)`: `ProductPublicationConnection!` *(deprecated)* — The product publications for the products published to the channel.
- `productPublicationsV3` `(first, after, last, before, reverse)`: `ResourcePublicationConnection!` — The list of product publication records for products published to this channel.
- `products` `(first, after, last, before, reverse)`: `ProductConnection!` — The list of products published to the channel.
- `productsCount` `(query, limit)`: `Count` — Retrieves the total count of [`products`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) published to a specific sales channel. Limited to a maximum of 10000 by default.
- `supportsFuturePublishing`: `Boolean!` — Whether the channel supports future publishing.

## Related Types

- [App](../../types/objects/App.md)
- [Count](../../types/objects/Count.md)
- [NavigationItem](../../types/objects/NavigationItem.md)
