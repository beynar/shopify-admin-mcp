# Input Object: `ProductSetInput`

The input fields required to create or update a product via ProductSet mutation.

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
- `giftCard`: `Boolean` — Whether the product is a gift card.
- `redirectNewHandle`: `Boolean` — Whether a redirect is required after a new handle has been provided.
- `status`: `ProductStatus` — The status of the product.
- `collections`: `[ID!]` — The IDs of collections that this product will be a member of.
- `metafields`: `[MetafieldInput!]` — The metafields to associate with this product.
- `files`: `[FileSetInput!]` — The files to associate with the product.
- `productOptions`: `[OptionSetInput!]` — List of custom product options and option values (maximum of 3 per product).
- `variants`: `[ProductVariantSetInput!]` — A list of variants associated with the product.
- `requiresSellingPlan`: `Boolean` — Whether the product can only be purchased with a selling plan (subscription). Products that are sold exclusively on subscription can only be created on online stores. If set to `true` on an already existing product, then the product will be marked unavailable on channels that don't support subscriptions.
- `claimOwnership`: `ProductClaimOwnershipInput` — The input field to enable an app to provide additional product features.
- `combinedListingRole`: `CombinedListingsRole` — The role of the product in a product grouping. It can only be set during creation.

## Related Types

- [CombinedListingsRole](../../types/enums/CombinedListingsRole.md)
- [FileSetInput](../../types/inputs/FileSetInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
- [OptionSetInput](../../types/inputs/OptionSetInput.md)
- [ProductClaimOwnershipInput](../../types/inputs/ProductClaimOwnershipInput.md)
- [ProductStatus](../../types/enums/ProductStatus.md)
- [ProductVariantSetInput](../../types/inputs/ProductVariantSetInput.md)
- [SEOInput](../../types/inputs/SEOInput.md)
