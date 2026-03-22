# Query: `productVariantByIdentifier`

**Returns:** `ProductVariant`

Return a product variant by an identifier.

## Arguments

- **`identifier`**: `ProductVariantIdentifierInput!` — The identifier of the product variant.

## Return Type Fields

- `availableForSale`: `Boolean!` — Whether the product variant is available for sale.
- `barcode`: `String` — The value of the barcode associated with the product.
- `compareAtPrice`: `Money` — The compare-at price of the variant in the default shop currency.
- `contextualPricing`: `ProductVariantContextualPricing!` — The pricing that applies for a customer in a given context. As of API version 2025-04, only active markets are considered in the price resolution.
- `createdAt`: `DateTime!` — The date and time when the variant was created.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `deliveryProfile`: `DeliveryProfile` — The [delivery profile](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile) for the variant.
- `displayName`: `String!` — Display name of the variant, based on product's title + variant's title.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `id`: `ID!` — A globally-unique ID.
- `inventoryItem`: `InventoryItem!` — The inventory item, which is used to query for inventory information.
- `inventoryPolicy`: `ProductVariantInventoryPolicy!` — Whether customers are allowed to place an order for the product variant when it's out of stock.
- `inventoryQuantity`: `Int` — The total sellable quantity of the variant.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `media`: `MediaConnection!` — The media associated with the product variant.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `position`: `Int!` — The order of the product variant in the list of product variants. The first position in the list is 1.
- `price`: `Money!` — The price of the product variant in the default shop currency.
- `product`: `Product!` — The product that this variant belongs to.
- `productParents`: `ProductConnection!` — A list of products that have product variants that contain this variant as a product component.
- `productVariantComponents`: `ProductVariantComponentConnection!` — A list of the product variant components.
- `requiresComponents`: `Boolean!` — Whether a product variant requires components. The default value is `false`.
- `selectedOptions`: `[SelectedOption!]!` — List of product options applied to the variant.
- `sellableOnlineQuantity`: `Int!` — The total sellable quantity of the variant for online channels.
- `sellingPlanGroups`: `SellingPlanGroupConnection!` — A list of all selling plan groups defined in the current shop associated with the product variant.
- `sellingPlanGroupsCount`: `Count` — Count of selling plan groups associated with the product variant.
- `showUnitPrice`: `Boolean!` — Whether to show the unit price for this product variant.
- `sku`: `String` — A case-sensitive identifier for the product variant in the shop.
- `taxable`: `Boolean!` — Whether a tax is charged when the product variant is sold.
- `title`: `String!` — The title of the product variant.
- `translations`: `[Translation!]!` — The published translations associated with the resource.
- `unitPrice`: `MoneyV2` — The unit price value for the variant based on the variant measurement.
- `unitPriceMeasurement`: `UnitPriceMeasurement` — The unit price measurement for the variant.
- `updatedAt`: `DateTime!` — The date and time (ISO 8601 format) when the product variant was last modified.

## Related Types

- [Count](../types/objects/Count.md)
- [DeliveryProfile](../types/objects/DeliveryProfile.md)
- [Image](../types/objects/Image.md)
- [InventoryItem](../types/objects/InventoryItem.md)
- [Metafield](../types/objects/Metafield.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [Product](../types/objects/Product.md)
- [ProductVariant](../types/objects/ProductVariant.md)
- [ProductVariantContextualPricing](../types/objects/ProductVariantContextualPricing.md)
- [ProductVariantIdentifierInput](../types/inputs/ProductVariantIdentifierInput.md)
- [ProductVariantInventoryPolicy](../types/enums/ProductVariantInventoryPolicy.md)
- [SelectedOption](../types/objects/SelectedOption.md)
- [Translation](../types/objects/Translation.md)
- [UnitPriceMeasurement](../types/objects/UnitPriceMeasurement.md)

## Example Query

```graphql
query ProductVariantByIdentifier($identifier: ProductVariantIdentifierInput!) {
  productVariantByIdentifier(identifier: $identifier) {
    id
    availableForSale
    barcode
    compareAtPrice
    createdAt
    defaultCursor
  }
}
```
