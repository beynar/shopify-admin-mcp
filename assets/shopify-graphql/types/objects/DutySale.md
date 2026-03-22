# Object: `DutySale`

A sale associated with a duty charge.

**Implements:** `Sale`

## Fields

- `actionType`: `SaleActionType!` — The type of order action that the sale represents.
- `duty`: `Duty!` — The duty for the associated sale.
- `id`: `ID!` — The unique ID for the sale.
- `lineType`: `SaleLineType!` — The line type assocated with the sale.
- `quantity`: `Int` — The number of units either ordered or intended to be returned.
- `taxes`: `[SaleTax!]!` — All individual taxes associated with the sale.
- `totalAmount`: `MoneyBag!` — The total sale amount after taxes and discounts.
- `totalDiscountAmountAfterTaxes`: `MoneyBag!` — The total discounts allocated to the sale after taxes.
- `totalDiscountAmountBeforeTaxes`: `MoneyBag!` — The total discounts allocated to the sale before taxes.
- `totalTaxAmount`: `MoneyBag!` — The total amount of taxes for the sale.

## Related Types

- [Duty](../../types/objects/Duty.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [SaleActionType](../../types/enums/SaleActionType.md)
- [SaleLineType](../../types/enums/SaleLineType.md)
- [SaleTax](../../types/objects/SaleTax.md)
