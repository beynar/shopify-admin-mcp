# Object: `DraftOrderLineItem`

A line item in a draft order. Line items are either [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or custom items created manually with specific pricing and attributes.

Each line item includes [quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.quantity), [pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.originalUnitPrice), [discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.discountedTotal), [tax information](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.taxLines), and [custom attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.customAttributes). For [bundle products](https://shopify.dev/docs/apps/build/products/bundles), the line item includes components that define the individual products within the bundle.

**Implements:** `Node`

## Fields

- `appliedDiscount`: `DraftOrderAppliedDiscount` — The custom applied discount.
- `approximateDiscountedUnitPriceSet`: `MoneyBag!` — The `discountedTotal` divided by `quantity`,
- `bundleComponents`: `[DraftOrderLineItem!]!` *(deprecated)* — The list of bundle components if applicable.
- `components`: `[DraftOrderLineItem!]!` — The components of the draft order line item.
- `custom`: `Boolean!` — Whether the line item is custom (`true`) or contains a product variant (`false`).
- `customAttributes`: `[Attribute!]!` — A list of attributes that represent custom features or special requests.
- `customAttributesV2`: `[TypedAttribute!]!` — The list of additional information (metafields) with the associated types.
- `discountedTotal`: `Money!` *(deprecated)* — The line item price, in shop currency, after discounts are applied.
- `discountedTotalSet`: `MoneyBag!` — The total price with discounts applied.
- `discountedUnitPrice`: `Money!` *(deprecated)* — The `discountedTotal` divided by `quantity`, equal to the value of the discount per unit in the shop currency.
- `discountedUnitPriceSet`: `MoneyBag!` *(deprecated)* — The unit price with discounts applied.
- `fulfillmentService`: `FulfillmentService` — Name of the service provider who fulfilled the order.
- `grams`: `Int` *(deprecated)* — The weight of the line item in grams.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image of the product variant.
- `isGiftCard`: `Boolean!` — Whether the line item represents the purchase of a gift card.
- `name`: `String!` — The name of the product.
- `originalTotal`: `Money!` *(deprecated)* — The total price, in shop currency, excluding discounts, equal to the original unit price multiplied by quantity.
- `originalTotalSet`: `MoneyBag!` — The total price excluding discounts, equal to the original unit price multiplied by quantity.
- `originalUnitPrice`: `Money!` *(deprecated)* — The price, in shop currency, without any discounts applied.
- `originalUnitPriceSet`: `MoneyBag!` — The price without any discounts applied.
- `originalUnitPriceWithCurrency`: `MoneyV2` — The original custom line item input price.
- `priceOverride`: `MoneyV2` — The price override for the line item.
- `product`: `Product` — The product for the line item.
- `quantity`: `Int!` — The quantity of items. For a bundle item, this is the quantity of bundles,
- `requiresShipping`: `Boolean!` — Whether physical shipping is required for the variant.
- `sku`: `String` — The SKU number of the product variant.
- `taxLines`: `[TaxLine!]!` — A list of tax lines.
- `taxable`: `Boolean!` — Whether the variant is taxable.
- `title`: `String!` — The title of the product or variant. This field only applies to custom line items.
- `totalDiscount`: `Money!` *(deprecated)* — The total discount applied in shop currency.
- `totalDiscountSet`: `MoneyBag!` — The total discount amount.
- `uuid`: `String!` — The UUID of the draft order line item. Must be unique and consistent across requests.
- `variant`: `ProductVariant` — The product variant for the line item.
- `variantTitle`: `String` — The name of the variant.
- `vendor`: `String` — The name of the vendor who created the product variant.
- `weight`: `Weight` — The weight unit and value.

## Related Types

- [Attribute](../../types/objects/Attribute.md)
- [DraftOrderAppliedDiscount](../../types/objects/DraftOrderAppliedDiscount.md)
- [FulfillmentService](../../types/objects/FulfillmentService.md)
- [Image](../../types/objects/Image.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [Product](../../types/objects/Product.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
- [TaxLine](../../types/objects/TaxLine.md)
- [TypedAttribute](../../types/objects/TypedAttribute.md)
- [Weight](../../types/objects/Weight.md)
