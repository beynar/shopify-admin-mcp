# Object: `CalculatedLineItem`

A line item involved in order editing that may be newly added or have new changes applied.

## Fields

- `calculatedDiscountAllocations`: `[CalculatedDiscountAllocation!]!` — The discounts that have been allocated onto the line item by discount applications.
- `customAttributes`: `[Attribute!]!` — A list of attributes that represent custom features or special requests.
- `discountAllocations`: `[DiscountAllocation!]!` *(deprecated)* — The discounts that have been allocated onto the line item by discount applications.
- `discountedUnitPriceSet`: `MoneyBag!` — The price of a single quantity of the line item with line item discounts applied, in shop and presentment currencies. Discounts applied to the entire order aren't included in this price.
- `editableQuantity`: `Int!` — The total number of items that can be edited.
- `editableQuantityBeforeChanges`: `Int!` — The editable quantity prior to any changes made in the current edit.
- `editableSubtotalSet`: `MoneyBag!` — The total price of editable lines in shop and presentment currencies.
- `hasStagedLineItemDiscount`: `Boolean!` — Whether the calculated line item has a staged discount.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image object associated to the line item's variant.
- `originalUnitPriceSet`: `MoneyBag!` — The variant unit price in shop and presentment currencies, without any discounts applied.
- `quantity`: `Int!` — The total number of items.
- `restockable`: `Boolean!` — Whether the line item can be restocked or not.
- `restocking`: `Boolean!` — Whether the changes on the line item will result in a restock.
- `sku`: `String` — The variant SKU number.
- `stagedChanges`: `[OrderStagedChange!]!` — A list of changes that affect this line item.
- `title`: `String!` — The title of the product.
- `uneditableSubtotalSet`: `MoneyBag!` — The total price of uneditable lines in shop and presentment currencies.
- `variant`: `ProductVariant` — The product variant associated with this line item. The value is null for custom line items and items where
- `variantTitle`: `String` — The title of the variant.

## Related Types

- [Attribute](../../types/objects/Attribute.md)
- [CalculatedDiscountAllocation](../../types/objects/CalculatedDiscountAllocation.md)
- [DiscountAllocation](../../types/objects/DiscountAllocation.md)
- [Image](../../types/objects/Image.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [OrderStagedChange](../../types/unions/OrderStagedChange.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
