# Interface: `Sale`

An individual sale record associated with a sales agreement. Every money value in an order's sales data is represented in the currency's smallest unit. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items.

## Fields

- `actionType`: `SaleActionType!` — The type of order action that the sale represents.
- `id`: `ID!` — The unique ID for the sale.
- `lineType`: `SaleLineType!` — The line type assocated with the sale.
- `quantity`: `Int` — The number of units either ordered or intended to be returned.
- `taxes`: `[SaleTax!]!` — All individual taxes associated with the sale.
- `totalAmount`: `MoneyBag!` — The total sale amount after taxes and discounts.
- `totalDiscountAmountAfterTaxes`: `MoneyBag!` — The total discounts allocated to the sale after taxes.
- `totalDiscountAmountBeforeTaxes`: `MoneyBag!` — The total discounts allocated to the sale before taxes.
- `totalTaxAmount`: `MoneyBag!` — The total amount of taxes for the sale.

## Possible Types

- [AdditionalFeeSale](../../types/objects/AdditionalFeeSale.md)
- [AdjustmentSale](../../types/objects/AdjustmentSale.md)
- [DutySale](../../types/objects/DutySale.md)
- [FeeSale](../../types/objects/FeeSale.md)
- [GiftCardSale](../../types/objects/GiftCardSale.md)
- [ProductSale](../../types/objects/ProductSale.md)
- [ShippingLineSale](../../types/objects/ShippingLineSale.md)
- [TipSale](../../types/objects/TipSale.md)
- [UnknownSale](../../types/objects/UnknownSale.md)

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [SaleActionType](../../types/enums/SaleActionType.md)
- [SaleLineType](../../types/enums/SaleLineType.md)
- [SaleTax](../../types/objects/SaleTax.md)
