# Input Object: `ProductUpdateInput`

The input fields for updating a product.

## Input Fields

- `descriptionHtml`: `String` — The description of the product, with HTML tags.
- `handle`: `String` — A unique, human-readable string that's used to identify the product in URLs. A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
- `seo`: `SEOInput` — The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords)
- `productType`: `String` — The [product type](https://help.shopify.com/manual/products/details/product-type)
- `tags`: `[String!]` — A list of searchable keywords that are
- `templateSuffix`: `String` — The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view a product in a store.
- `giftCardTemplateSuffix`: `String` — The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view a gift card in a store.
- `title`: `String` — The name for the product that displays to customers. If no handle is explicitly provided, then the title is used to construct the product's handle.
- `vendor`: `String` — The name of the product's vendor.
- `category`: `ID` — The ID of the [category](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17)
- `redirectNewHandle`: `Boolean` — Whether a redirect is required after a new handle has been provided.
- `id`: `ID` — The product's ID.
- `collectionsToJoin`: `[ID!]` — A list of collection IDs to associate with the product.
- `collectionsToLeave`: `[ID!]` — The collection IDs to disassociate from the product.
- `deleteConflictingConstrainedMetafields`: `Boolean` = `false` — Whether to delete metafields whose constraints don't match the product's category.
- `metafields`: `[MetafieldInput!]` — The [custom fields](https://shopify.dev/docs/apps/build/custom-data) to associate with the product
- `status`: `ProductStatus` — The [product status](https://help.shopify.com/manual/products/details/product-details-page#product-status),
- `requiresSellingPlan`: `Boolean` — Whether the product can only be purchased with

## Related Types

- [MetafieldInput](../../types/inputs/MetafieldInput.md)
- [ProductStatus](../../types/enums/ProductStatus.md)
- [SEOInput](../../types/inputs/SEOInput.md)
