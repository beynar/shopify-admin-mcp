# Object: `CalculatedDraftOrderLineItem`

The calculated line item for a draft order.

## Fields

- `appliedDiscount`: `DraftOrderAppliedDiscount` — The custom applied discount.
- `approximateDiscountedUnitPriceSet`: `MoneyBag!` — The `discountedTotal` divided by `quantity`,
- `bundleComponents`: `[CalculatedDraftOrderLineItem!]!` *(deprecated)* — The bundle components of the draft order line item.
- `components`: `[CalculatedDraftOrderLineItem!]!` — The components of the draft order line item.
- `custom`: `Boolean!` — Whether the line item is custom (`true`) or contains a product variant (`false`).
- `customAttributes`: `[Attribute!]!` — A list of attributes that represent custom features or special requests.
- `customAttributesV2`: `[TypedAttribute!]!` — The list of additional information (metafields) with the associated types.
- `discountedTotal`: `MoneyV2!` — The total price with discounts applied.
- `discountedTotalSet`: `MoneyBag!` — The total price with discounts applied.
- `discountedUnitPrice`: `MoneyV2!` *(deprecated)* — The unit price with discounts applied.
- `discountedUnitPriceSet`: `MoneyBag!` *(deprecated)* — The unit price with discounts applied.
- `fulfillmentService`: `FulfillmentService` — Name of the service provider who fulfilled the order.
- `image`: `Image` — The image associated with the draft order line item.
- `isGiftCard`: `Boolean!` — Whether the line item represents the purchase of a gift card.
- `name`: `String!` — The name of the product.
- `originalTotal`: `MoneyV2!` — The total price, excluding discounts, equal to the original unit price multiplied by quantity.
- `originalTotalSet`: `MoneyBag!` — The total price excluding discounts, equal to the original unit price multiplied by quantity.
- `originalUnitPrice`: `MoneyV2!` — The line item price without any discounts applied.
- `originalUnitPriceSet`: `MoneyBag!` — The price without any discounts applied.
- `originalUnitPriceWithCurrency`: `MoneyV2` — The original custom line item input price.
- `priceOverride`: `MoneyV2` — The price override for the line item.
- `product`: `Product` — The product for the line item.
- `quantity`: `Int!` — The quantity of items. For a bundle item, this is the quantity of bundles,
- `requiresShipping`: `Boolean!` — Whether physical shipping is required for the variant.
- `sku`: `String` — The SKU number of the product variant.
- `taxable`: `Boolean!` — Whether the variant is taxable.
- `title`: `String!` — The title of the product or variant. This field only applies to custom line items.
- `totalDiscount`: `MoneyV2!` — The total value of the discount.
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
- [TypedAttribute](../../types/objects/TypedAttribute.md)
- [Weight](../../types/objects/Weight.md)
