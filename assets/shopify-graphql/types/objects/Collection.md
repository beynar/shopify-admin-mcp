# Object: `Collection`

The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
that merchants can organize to make their stores easier to browse and help customers find related products.
Collections serve as the primary way to categorize and display products across
[online stores](https://shopify.dev/docs/apps/build/online-store),
[sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

There are two types of collections:

- **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
- **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

The `Collection` object provides information to:

- Organize products by category, season, or promotion.
- Automate product grouping using rules (for example, by tag, type, or price).
- Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
- Manage collection visibility and publication across sales channels.
- Add rich descriptions, images, and metadata to enhance discovery.

> Note:
> Collections are unpublished by default. To make them available to customers,
use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)
mutation after creation.

Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection)
and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates)
for unique layouts. They also support advanced features like translated content, resource feedback,
and contextual publication for location-based catalogs.

Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

**Implements:** `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `HasPublishedTranslations`, `Node`, `Publishable`

## Fields

- `activeOperations`: `CollectionOperations!` — Collection duplicate operations involving this collection, either as a source (copying products from this collection to another) or a target (copying products to this collection from another).
- `availablePublicationsCount`: `Count` — The number of
- `description` `(truncateAt)`: `String!` — A single-line, text-only description of the collection, stripped of any HTML tags and formatting that were included in the description.
- `descriptionHtml`: `HTML!` — The description of the collection, including any HTML tags and formatting. This content is typically displayed to customers, such as on an online store, depending on the theme.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `feedback`: `ResourceFeedback` — Information about the collection that's provided through resource feedback.
- `handle`: `String!` — A unique string that identifies the collection. If a handle isn't specified when a collection is created, it's automatically generated from the collection's original title, and typically includes words from the title separated by hyphens. For example, a collection that was created with the title `Summer Catalog 2022` might have the handle `summer-catalog-2022`.
- `hasProduct` `(id)`: `Boolean!` — Whether the collection includes the specified product.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image associated with the collection.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `products` `(first, after, last, before, reverse, sortKey)`: `ProductConnection!` — The products that are included in the collection.
- `productsCount`: `Count` — The number of products in the collection.
- `publicationCount` `(onlyPublished)`: `Int!` *(deprecated)* — The number of
- `publications` `(onlyPublished, first, after, last, before, reverse)`: `CollectionPublicationConnection!` *(deprecated)* — The channels where the collection is published.
- `publishedOnChannel` `(channelId)`: `Boolean!` *(deprecated)* — Whether the resource is published to a specific channel.
- `publishedOnCurrentChannel`: `Boolean!` *(deprecated)* — Whether the resource is published to a
- `publishedOnCurrentPublication`: `Boolean!` *(deprecated)* — Whether the resource is published to the app's
- `publishedOnPublication` `(publicationId)`: `Boolean!` — Whether the resource is published to a specified
- `resourcePublications` `(onlyPublished, first, after, last, before, reverse)`: `ResourcePublicationConnection!` — The list of resources that are published to a
- `resourcePublicationsCount` `(onlyPublished)`: `Count` — The number of
- `resourcePublicationsV2` `(onlyPublished, catalogType, first, after, last, before, reverse)`: `ResourcePublicationV2Connection!` — The list of resources that are either published or staged to be published to a
- `ruleSet`: `CollectionRuleSet` — For a smart (automated) collection, specifies the rules that determine whether a product is included.
- `seo`: `SEO!` — If the default SEO fields for page title and description have been modified, contains the modified information.
- `sortOrder`: `CollectionSortOrder!` — The order in which the products in the collection are displayed by default in the Shopify admin and in sales channels, such as an online store.
- `storefrontId`: `StorefrontID!` *(deprecated)* — The Storefront GraphQL API ID of the `Collection`.
- `templateSuffix`: `String` — The suffix of the Liquid template being used to show the collection in an online store. For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template. If the value is `null`, then the collection is using the default `collection.liquid` template.
- `title`: `String!` — The name of the collection. It's displayed in the Shopify admin and is typically displayed in sales channels, such as an online store.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `unpublishedChannels` `(first, after, last, before, reverse)`: `ChannelConnection!` *(deprecated)* — The list of channels that the resource is not published to.
- `unpublishedPublications` `(first, after, last, before, reverse)`: `PublicationConnection!` — The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified.

## Related Types

- [CatalogType](../../types/enums/CatalogType.md)
- [CollectionOperations](../../types/objects/CollectionOperations.md)
- [CollectionRuleSet](../../types/objects/CollectionRuleSet.md)
- [CollectionSortOrder](../../types/enums/CollectionSortOrder.md)
- [Count](../../types/objects/Count.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Image](../../types/objects/Image.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [ProductCollectionSortKeys](../../types/enums/ProductCollectionSortKeys.md)
- [ResourceFeedback](../../types/objects/ResourceFeedback.md)
- [SEO](../../types/objects/SEO.md)
- [Translation](../../types/objects/Translation.md)
