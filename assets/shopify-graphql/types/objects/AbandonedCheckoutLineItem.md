# Object: `AbandonedCheckoutLineItem`

A single line item in an abandoned checkout.

**Implements:** `Node`

## Fields

- `components`: `[AbandonedCheckoutLineItemComponent!]` — A list of line item components for this line item.
- `customAttributes`: `[Attribute!]!` — A list of extra information that has been added to the line item.
- `discountAllocations` `(first, after, last, before, reverse)`: `DiscountAllocationConnection!` — Discount allocations that have been applied on the line item.
- `discountedTotalPriceSet`: `MoneyBag!` — Final total price for the entire quantity of this line item, including discounts.
- `discountedTotalPriceWithCodeDiscount`: `MoneyBag!` — The total price for the entire quantity of this line item, after all discounts are applied, at both the line item and code-based line item level.
- `discountedUnitPriceSet`: `MoneyBag!` — The price of a single variant unit after discounts are applied at the line item level, in shop and presentment currencies.
- `discountedUnitPriceWithCodeDiscount`: `MoneyBag!` — The price of a single variant unit after all discounts are applied, at both the line item and code-based line item level.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image associated with the line item's variant or product.
- `originalTotalPriceSet`: `MoneyBag!` — Original total price for the entire quantity of this line item, before discounts.
- `originalUnitPriceSet`: `MoneyBag!` — Original price for a single unit of this line item, before discounts.
- `parentRelationship`: `AbandonedCheckoutLineItemParentRelationship` — The parent relationship for this line item.
- `product`: `Product` — Product for this line item.
- `quantity`: `Int!` — The quantity of the line item.
- `sku`: `String` — SKU for the inventory item associated with the variant, if any.
- `title`: `String` — Title of the line item. Defaults to the product's title.
- `variant`: `ProductVariant` — Product variant for this line item.
- `variantTitle`: `String` — Title of the variant for this line item.

## Related Types

- [AbandonedCheckoutLineItemComponent](../../types/objects/AbandonedCheckoutLineItemComponent.md)
- [AbandonedCheckoutLineItemParentRelationship](../../types/objects/AbandonedCheckoutLineItemParentRelationship.md)
- [Attribute](../../types/objects/Attribute.md)
- [Image](../../types/objects/Image.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [Product](../../types/objects/Product.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
