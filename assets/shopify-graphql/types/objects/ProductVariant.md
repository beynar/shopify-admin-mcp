# Object: `ProductVariant`

The `ProductVariant` object represents a version of a
[product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption),
such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small,
blue t-shirt would be one product variant and a large, blue t-shirt would be another.

Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common
use cases for using the `ProductVariant` object include:

- Tracking inventory for each variant
- Setting unique prices for each variant
- Assigning barcodes and SKUs to connect variants to fulfillment services
- Attaching variant-specific images and media
- Setting delivery and tax requirements
- Supporting product bundles, subscriptions, and selling plans

A `ProductVariant` is associated with a parent
[`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object.
`ProductVariant` serves as the central link between a product's merchandising configuration, inventory,
pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant
can reference other GraphQL types such as:

- [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
- [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
- [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

**Implements:** `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `HasPublishedTranslations`, `LegacyInteroperability`, `Navigable`, `Node`

## Fields

- `availableForSale`: `Boolean!` — Whether the product variant is available for sale.
- `barcode`: `String` — The value of the barcode associated with the product.
- `compareAtPrice`: `Money` — The compare-at price of the variant in the default shop currency.
- `contextualPricing` `(context)`: `ProductVariantContextualPricing!` — The pricing that applies for a customer in a given context. As of API version 2025-04, only active markets are considered in the price resolution.
- `createdAt`: `DateTime!` — The date and time when the variant was created.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `deliveryProfile`: `DeliveryProfile` — The [delivery profile](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile) for the variant.
- `displayName`: `String!` — Display name of the variant, based on product's title + variant's title.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` *(deprecated)* — The featured image for the variant.
- `inventoryItem`: `InventoryItem!` — The inventory item, which is used to query for inventory information.
- `inventoryPolicy`: `ProductVariantInventoryPolicy!` — Whether customers are allowed to place an order for the product variant when it's out of stock.
- `inventoryQuantity`: `Int` — The total sellable quantity of the variant.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `media` `(first, after, last, before, reverse)`: `MediaConnection!` — The media associated with the product variant.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `position`: `Int!` — The order of the product variant in the list of product variants. The first position in the list is 1.
- `presentmentPrices` `(presentmentCurrencies, first, after, last, before, reverse)`: `ProductVariantPricePairConnection!` *(deprecated)* — List of prices and compare-at prices in the presentment currencies for this shop.
- `price`: `Money!` — The price of the product variant in the default shop currency.
- `product`: `Product!` — The product that this variant belongs to.
- `productParents` `(first, after, last, before, reverse, query)`: `ProductConnection!` — A list of products that have product variants that contain this variant as a product component.
- `productVariantComponents` `(first, after, last, before, reverse)`: `ProductVariantComponentConnection!` — A list of the product variant components.
- `requiresComponents`: `Boolean!` — Whether a product variant requires components. The default value is `false`.
- `selectedOptions`: `[SelectedOption!]!` — List of product options applied to the variant.
- `sellableOnlineQuantity`: `Int!` — The total sellable quantity of the variant for online channels.
- `sellingPlanGroupCount`: `Int!` *(deprecated)* — Count of selling plan groups associated with the product variant.
- `sellingPlanGroups` `(first, after, last, before, reverse)`: `SellingPlanGroupConnection!` — A list of all selling plan groups defined in the current shop associated with the product variant.
- `sellingPlanGroupsCount`: `Count` — Count of selling plan groups associated with the product variant.
- `showUnitPrice`: `Boolean!` — Whether to show the unit price for this product variant.
- `sku`: `String` — A case-sensitive identifier for the product variant in the shop.
- `storefrontId`: `StorefrontID!` *(deprecated)* — The Storefront GraphQL API ID of the `ProductVariant`.
- `taxCode`: `String` *(deprecated)* — Avalara tax code for the product variant. Applies only to the stores that have the Avalara AvaTax app installed.
- `taxable`: `Boolean!` — Whether a tax is charged when the product variant is sold.
- `title`: `String!` — The title of the product variant.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `unitPrice`: `MoneyV2` — The unit price value for the variant based on the variant measurement.
- `unitPriceMeasurement`: `UnitPriceMeasurement` — The unit price measurement for the variant.
- `updatedAt`: `DateTime!` — The date and time (ISO 8601 format) when the product variant was last modified.

## Related Types

- [ContextualPricingContext](../../types/inputs/ContextualPricingContext.md)
- [Count](../../types/objects/Count.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [DeliveryProfile](../../types/objects/DeliveryProfile.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Image](../../types/objects/Image.md)
- [InventoryItem](../../types/objects/InventoryItem.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [Product](../../types/objects/Product.md)
- [ProductVariantContextualPricing](../../types/objects/ProductVariantContextualPricing.md)
- [ProductVariantInventoryPolicy](../../types/enums/ProductVariantInventoryPolicy.md)
- [SelectedOption](../../types/objects/SelectedOption.md)
- [Translation](../../types/objects/Translation.md)
- [UnitPriceMeasurement](../../types/objects/UnitPriceMeasurement.md)
