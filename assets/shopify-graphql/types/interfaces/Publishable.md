# Interface: `Publishable`

Represents a resource that can be published to a channel.
A publishable resource can be either a Product or Collection.

## Fields

- `availablePublicationsCount`: `Count` — The number of
- `publicationCount` `(onlyPublished)`: `Int!` *(deprecated)* — The number of
- `publishedOnChannel` `(channelId)`: `Boolean!` *(deprecated)* — Whether the resource is published to a specific channel.
- `publishedOnCurrentChannel`: `Boolean!` *(deprecated)* — Whether the resource is published to a
- `publishedOnCurrentPublication`: `Boolean!` *(deprecated)* — Whether the resource is published to the app's
- `publishedOnPublication` `(publicationId)`: `Boolean!` — Whether the resource is published to a specified
- `resourcePublications` `(onlyPublished, first, after, last, before, reverse)`: `ResourcePublicationConnection!` — The list of resources that are published to a
- `resourcePublicationsCount` `(onlyPublished)`: `Count` — The number of
- `resourcePublicationsV2` `(onlyPublished, catalogType, first, after, last, before, reverse)`: `ResourcePublicationV2Connection!` — The list of resources that are either published or staged to be published to a
- `unpublishedChannels` `(first, after, last, before, reverse)`: `ChannelConnection!` *(deprecated)* — The list of channels that the resource is not published to.
- `unpublishedPublications` `(first, after, last, before, reverse)`: `PublicationConnection!` — The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

## Possible Types

- [Collection](../../types/objects/Collection.md)
- [Product](../../types/objects/Product.md)

## Related Types

- [CatalogType](../../types/enums/CatalogType.md)
- [Count](../../types/objects/Count.md)
