# Query: `productByHandle`

**Returns:** `Product`

Retrieves a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) using its handle. A handle is a unique, URL-friendly string that Shopify automatically generates from the product's title.

Returns `null` if no product exists with the specified handle.

## Arguments

- **`handle`**: `String!` — A unique string that identifies the product. Handles are automatically generated based on the product's title, and are always lowercase. Whitespace and special characters are replaced with a hyphen: `-`. If there are multiple consecutive whitespace or special characters, then they're replaced with a single hyphen. Whitespace or special characters at the beginning are removed. If a duplicate product title is used, then the handle is auto-incremented by one. For example, if you had two products called `Potion`, then their handles would be `potion` and `potion-1`. After a product has been created, changing the product title doesn't update the handle.

## Return Type Fields

- `availablePublicationsCount`: `Count` — The number of
- `bundleComponents`: `ProductBundleComponentConnection!` — A list of [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle)
- `bundleConsolidatedOptions`: `[ComponentizedProductsBundleConsolidatedOption!]` — A list of consolidated options for a product in a bundle.
- `category`: `TaxonomyCategory` — The category of a product
- `collections`: `CollectionConnection!` — A list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)
- `combinedListing`: `CombinedListing` — A special product type that combines separate products from a store into a single product listing.
- `combinedListingRole`: `CombinedListingsRole` — The [role of the product](https://shopify.dev/docs/apps/build/product-merchandising/combined-listings/build-for-combined-listings)
- `compareAtPriceRange`: `ProductCompareAtPriceRange` — The [compare-at price range](https://help.shopify.com/manual/products/details/product-pricing/sale-pricing)
- `contextualPricing`: `ProductContextualPricing!` — The pricing that applies to a customer in a specific context. For example, a price might vary depending on the customer's location. Only active markets are considered in the price resolution.
- `createdAt`: `DateTime!` — The date and time when the product was created.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `description`: `String!` — A single-line description of the product,
- `descriptionHtml`: `HTML!` — The description of the product, with
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `featuredMedia`: `Media` — The featured [media](https://shopify.dev/docs/apps/build/online-store/product-media)
- `feedback`: `ResourceFeedback` — The information that lets merchants know what steps they need to take
- `giftCardTemplateSuffix`: `String` — The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the gift card in a store.
- `handle`: `String!` — A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
- `hasOnlyDefaultVariant`: `Boolean!` — Whether the product has only a single variant with the default option and value.
- `hasOutOfStockVariants`: `Boolean!` — Whether the product has variants that are out of stock.
- `hasVariantsThatRequiresComponents`: `Boolean!` — Whether at least one of the product variants requires
- `id`: `ID!` — A globally-unique ID.
- `inCollection`: `Boolean!` — Whether the product
- `isGiftCard`: `Boolean!` — Whether the product is a gift card.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `media`: `MediaConnection!` — The [media](https://shopify.dev/docs/apps/build/online-store/product-media) associated with the product. Valid media are images, 3D models, videos.
- `mediaCount`: `Count` — The total count of [media](https://shopify.dev/docs/apps/build/online-store/product-media)
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `onlineStorePreviewUrl`: `URL` — The [preview URL](https://help.shopify.com/manual/online-store/setting-up#preview-your-store) for the online store.
- `onlineStoreUrl`: `URL` — The product's URL on the online store.
- `options`: `[ProductOption!]!` — A list of product options. The limit is defined by the
- `priceRangeV2`: `ProductPriceRangeV2!` — The minimum and maximum prices of a product, expressed in decimal numbers.
- `productComponents`: `ProductComponentTypeConnection!` — A list of products that contain at least one variant associated with
- `productComponentsCount`: `Count` — A count of unique products that contain at least one variant associated with
- `productParents`: `ProductConnection!` — A list of products that has a variant that contains any of this product's variants as a component.
- `productType`: `String!` — The [product type](https://help.shopify.com/manual/products/details/product-type)
- `publishedAt`: `DateTime` — The date and time when the product was published to the online store.
- `publishedInContext`: `Boolean!` — Whether the product is published for a customer only in a specified context. For example, a product might be published for a customer only in a specific location.
- `publishedOnPublication`: `Boolean!` — Whether the resource is published to a specified
- `requiresSellingPlan`: `Boolean!` — Whether the product can only be purchased with
- `resourcePublications`: `ResourcePublicationConnection!` — The list of resources that are published to a
- `resourcePublicationsCount`: `Count` — The number of
- `resourcePublicationsV2`: `ResourcePublicationV2Connection!` — The list of resources that are either published or staged to be published to a
- `restrictedForResource`: `RestrictedForResource` — Whether the merchant can make changes to the product when they
- `sellingPlanGroups`: `SellingPlanGroupConnection!` — A list of all [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan)
- `sellingPlanGroupsCount`: `Count` — A count of [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan)
- `seo`: `SEO!` — The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords)
- `status`: `ProductStatus!` — The [product status](https://help.shopify.com/manual/products/details/product-details-page#product-status),
- `tags`: `[String!]!` — A comma-separated list of searchable keywords that are
- `templateSuffix`: `String` — The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the product in a store.
- `title`: `String!` — The name for the product that displays to customers. The title is used to construct the product's handle.
- `totalInventory`: `Int!` — The quantity of inventory that's in stock.
- `tracksInventory`: `Boolean!` — Whether [inventory tracking](https://help.shopify.com/manual/products/inventory/getting-started-with-inventory/set-up-inventory-tracking)
- `translations`: `[Translation!]!` — The published translations associated with the resource.
- `unpublishedPublications`: `PublicationConnection!` — The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)
- `updatedAt`: `DateTime!` — The date and time when the product was last modified.
- `variants`: `ProductVariantConnection!` — A list of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with the product.
- `variantsCount`: `Count` — The number of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
- `vendor`: `String!` — The name of the product's vendor.

## Related Types

- [CombinedListing](../types/objects/CombinedListing.md)
- [CombinedListingsRole](../types/enums/CombinedListingsRole.md)
- [ComponentizedProductsBundleConsolidatedOption](../types/objects/ComponentizedProductsBundleConsolidatedOption.md)
- [Count](../types/objects/Count.md)
- [Image](../types/objects/Image.md)
- [Media](../types/interfaces/Media.md)
- [Metafield](../types/objects/Metafield.md)
- [Product](../types/objects/Product.md)
- [ProductCategory](../types/objects/ProductCategory.md)
- [ProductCompareAtPriceRange](../types/objects/ProductCompareAtPriceRange.md)
- [ProductContextualPricing](../types/objects/ProductContextualPricing.md)
- [ProductOption](../types/objects/ProductOption.md)
- [ProductPriceRange](../types/objects/ProductPriceRange.md)
- [ProductPriceRangeV2](../types/objects/ProductPriceRangeV2.md)
- [ProductStatus](../types/enums/ProductStatus.md)
- [ResourceFeedback](../types/objects/ResourceFeedback.md)
- [ResourcePublicationV2](../types/objects/ResourcePublicationV2.md)
- [RestrictedForResource](../types/objects/RestrictedForResource.md)
- [SEO](../types/objects/SEO.md)
- [StandardizedProductType](../types/objects/StandardizedProductType.md)
- [TaxonomyCategory](../types/objects/TaxonomyCategory.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query ProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    id
    createdAt
    defaultCursor
    description
    descriptionHtml
    giftCardTemplateSuffix
  }
}
```
