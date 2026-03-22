# Object: `Product`

The `Product` object lets you manage products in a merchant’s store.

Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color.
You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product.
You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media).
Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components),
including limitations and considerations.

**Implements:** `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `HasPublishedTranslations`, `LegacyInteroperability`, `Navigable`, `Node`, `OnlineStorePreviewable`, `Publishable`

## Fields

- `availablePublicationsCount`: `Count` — The number of
- `bodyHtml`: `String` *(deprecated)* — The description of the product, with
- `bundleComponents` `(first, after, last, before, reverse)`: `ProductBundleComponentConnection!` — A list of [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle)
- `bundleConsolidatedOptions`: `[ComponentizedProductsBundleConsolidatedOption!]` — A list of consolidated options for a product in a bundle.
- `category`: `TaxonomyCategory` — The category of a product
- `collections` `(first, after, last, before, reverse, sortKey, query)`: `CollectionConnection!` — A list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
- `combinedListing`: `CombinedListing` — A special product type that combines separate products from a store into a single product listing.
- `combinedListingRole`: `CombinedListingsRole` — The [role of the product](https://shopify.dev/docs/apps/build/product-merchandising/combined-listings/build-for-combined-listings)
- `compareAtPriceRange`: `ProductCompareAtPriceRange` — The [compare-at price range](https://help.shopify.com/manual/products/details/product-pricing/sale-pricing)
- `contextualPricing` `(context)`: `ProductContextualPricing!` — The pricing that applies to a customer in a specific context. For example, a price might vary depending on the customer's location. Only active markets are considered in the price resolution.
- `createdAt`: `DateTime!` — The date and time when the product was created.
- `customProductType`: `String` *(deprecated)* — The custom product type specified by the merchant.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `description` `(truncateAt)`: `String!` — A single-line description of the product,
- `descriptionHtml`: `HTML!` — The description of the product, with
- `descriptionPlainSummary`: `String!` *(deprecated)* — Stripped description of the product, single line with HTML tags removed.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `featuredImage`: `Image` *(deprecated)* — The featured image for the product.
- `featuredMedia`: `Media` — The featured [media](https://shopify.dev/docs/apps/build/online-store/product-media)
- `feedback`: `ResourceFeedback` — The information that lets merchants know what steps they need to take
- `giftCardTemplateSuffix`: `String` — The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the gift card in a store.
- `handle`: `String!` — A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
- `hasOnlyDefaultVariant`: `Boolean!` — Whether the product has only a single variant with the default option and value.
- `hasOutOfStockVariants`: `Boolean!` — Whether the product has variants that are out of stock.
- `hasVariantsThatRequiresComponents`: `Boolean!` — Whether at least one of the product variants requires
- `id`: `ID!` — A globally-unique ID.
- `images` `(first, after, last, before, reverse, sortKey)`: `ImageConnection!` *(deprecated)* — The images associated with the product.
- `inCollection` `(id)`: `Boolean!` — Whether the product
- `isGiftCard`: `Boolean!` — Whether the product is a gift card.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `media` `(first, after, last, before, reverse, sortKey, query)`: `MediaConnection!` — The [media](https://shopify.dev/docs/apps/build/online-store/product-media) associated with the product. Valid media are images, 3D models, videos.
- `mediaCount`: `Count` — The total count of [media](https://shopify.dev/docs/apps/build/online-store/product-media)
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `onlineStorePreviewUrl`: `URL` — The [preview URL](https://help.shopify.com/manual/online-store/setting-up#preview-your-store) for the online store.
- `onlineStoreUrl`: `URL` — The product's URL on the online store.
- `options` `(first)`: `[ProductOption!]!` — A list of product options. The limit is defined by the
- `priceRange`: `ProductPriceRange!` *(deprecated)* — The price range of the product.
- `priceRangeV2`: `ProductPriceRangeV2!` — The minimum and maximum prices of a product, expressed in decimal numbers.
- `productCategory`: `ProductCategory` *(deprecated)* — The product category specified by the merchant.
- `productComponents` `(first, after, last, before, reverse)`: `ProductComponentTypeConnection!` — A list of products that contain at least one variant associated with
- `productComponentsCount`: `Count` — A count of unique products that contain at least one variant associated with
- `productParents` `(first, after, last, before, reverse, query)`: `ProductConnection!` — A list of products that has a variant that contains any of this product's variants as a component.
- `productPublications` `(first, after, last, before, reverse)`: `ProductPublicationConnection!` *(deprecated)* — A list of the channels where the product is published.
- `productType`: `String!` — The [product type](https://help.shopify.com/manual/products/details/product-type)
- `publicationCount` `(onlyPublished)`: `Int!` *(deprecated)* — The number of
- `publications` `(onlyPublished, first, after, last, before, reverse)`: `ProductPublicationConnection!` *(deprecated)* — A list of the channels where the product is published.
- `publishedAt`: `DateTime` — The date and time when the product was published to the online store.
- `publishedInContext` `(context)`: `Boolean!` — Whether the product is published for a customer only in a specified context. For example, a product might be published for a customer only in a specific location.
- `publishedOnChannel` `(channelId)`: `Boolean!` *(deprecated)* — Whether the resource is published to a specific channel.
- `publishedOnCurrentChannel`: `Boolean!` *(deprecated)* — Whether the resource is published to a
- `publishedOnCurrentPublication`: `Boolean!` *(deprecated)* — Whether the resource is published to the app's
- `publishedOnPublication` `(publicationId)`: `Boolean!` — Whether the resource is published to a specified
- `requiresSellingPlan`: `Boolean!` — Whether the product can only be purchased with
- `resourcePublicationOnCurrentPublication`: `ResourcePublicationV2` *(deprecated)* — The resource that's either published or staged to be published to
- `resourcePublications` `(onlyPublished, first, after, last, before, reverse)`: `ResourcePublicationConnection!` — The list of resources that are published to a
- `resourcePublicationsCount` `(onlyPublished)`: `Count` — The number of
- `resourcePublicationsV2` `(onlyPublished, catalogType, first, after, last, before, reverse)`: `ResourcePublicationV2Connection!` — The list of resources that are either published or staged to be published to a
- `restrictedForResource` `(calculatedOrderId)`: `RestrictedForResource` — Whether the merchant can make changes to the product when they
- `sellingPlanGroupCount`: `Int!` *(deprecated)* — A count of [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan)
- `sellingPlanGroups` `(first, after, last, before, reverse)`: `SellingPlanGroupConnection!` — A list of all [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan)
- `sellingPlanGroupsCount`: `Count` — A count of [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan)
- `seo`: `SEO!` — The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords)
- `standardizedProductType`: `StandardizedProductType` *(deprecated)* — The standardized product type in the Shopify product taxonomy.
- `status`: `ProductStatus!` — The [product status](https://help.shopify.com/manual/products/details/product-details-page#product-status),
- `storefrontId`: `StorefrontID!` *(deprecated)* — The Storefront GraphQL API ID of the `Product`.
- `tags`: `[String!]!` — A comma-separated list of searchable keywords that are
- `templateSuffix`: `String` — The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the product in a store.
- `title`: `String!` — The name for the product that displays to customers. The title is used to construct the product's handle.
- `totalInventory`: `Int!` — The quantity of inventory that's in stock.
- `totalVariants`: `Int!` *(deprecated)* — The number of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
- `tracksInventory`: `Boolean!` — Whether [inventory tracking](https://help.shopify.com/manual/products/inventory/getting-started-with-inventory/set-up-inventory-tracking)
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `unpublishedChannels` `(first, after, last, before, reverse)`: `ChannelConnection!` *(deprecated)* — The list of channels that the resource is not published to.
- `unpublishedPublications` `(first, after, last, before, reverse)`: `PublicationConnection!` — The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
- `updatedAt`: `DateTime!` — The date and time when the product was last modified.
- `variants` `(first, after, last, before, reverse, sortKey)`: `ProductVariantConnection!` — A list of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with the product.
- `variantsCount`: `Count` — The number of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
- `vendor`: `String!` — The name of the product's vendor.

## Related Types

- [CatalogType](../../types/enums/CatalogType.md)
- [CollectionSortKeys](../../types/enums/CollectionSortKeys.md)
- [CombinedListing](../../types/objects/CombinedListing.md)
- [CombinedListingsRole](../../types/enums/CombinedListingsRole.md)
- [ComponentizedProductsBundleConsolidatedOption](../../types/objects/ComponentizedProductsBundleConsolidatedOption.md)
- [ContextualPricingContext](../../types/inputs/ContextualPricingContext.md)
- [ContextualPublicationContext](../../types/inputs/ContextualPublicationContext.md)
- [Count](../../types/objects/Count.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Image](../../types/objects/Image.md)
- [Media](../../types/interfaces/Media.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [ProductCategory](../../types/objects/ProductCategory.md)
- [ProductCompareAtPriceRange](../../types/objects/ProductCompareAtPriceRange.md)
- [ProductContextualPricing](../../types/objects/ProductContextualPricing.md)
- [ProductImageSortKeys](../../types/enums/ProductImageSortKeys.md)
- [ProductMediaSortKeys](../../types/enums/ProductMediaSortKeys.md)
- [ProductOption](../../types/objects/ProductOption.md)
- [ProductPriceRange](../../types/objects/ProductPriceRange.md)
- [ProductPriceRangeV2](../../types/objects/ProductPriceRangeV2.md)
- [ProductStatus](../../types/enums/ProductStatus.md)
- [ProductVariantSortKeys](../../types/enums/ProductVariantSortKeys.md)
- [ResourceFeedback](../../types/objects/ResourceFeedback.md)
- [ResourcePublicationV2](../../types/objects/ResourcePublicationV2.md)
- [RestrictedForResource](../../types/objects/RestrictedForResource.md)
- [SEO](../../types/objects/SEO.md)
- [StandardizedProductType](../../types/objects/StandardizedProductType.md)
- [TaxonomyCategory](../../types/objects/TaxonomyCategory.md)
- [Translation](../../types/objects/Translation.md)
