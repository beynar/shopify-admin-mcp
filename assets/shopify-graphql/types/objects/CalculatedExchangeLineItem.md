# Object: `CalculatedExchangeLineItem`

A calculated exchange line item.

## Fields

- `calculatedDiscountAllocations`: `[CalculatedDiscountAllocation!]!` — The discounts that have been allocated onto the line item by discount applications.
- `discountedUnitPriceSet`: `MoneyBag!` — The unit price of the exchange line item after discounts.
- `id`: `ID` — A globally-unique ID.
- `originalUnitPriceSet`: `MoneyBag!` — The original unit price of the exchange line item before discounts.
- `quantity`: `Int!` — The quantity being exchanged.
- `subtotalSet`: `MoneyBag!` — The calculated subtotal set of the exchange line item, including discounts.
- `totalTaxSet`: `MoneyBag!` — The total tax of the exchange line item.
- `variant`: `ProductVariant` — The variant being exchanged.

## Related Types

- [CalculatedDiscountAllocation](../../types/objects/CalculatedDiscountAllocation.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
