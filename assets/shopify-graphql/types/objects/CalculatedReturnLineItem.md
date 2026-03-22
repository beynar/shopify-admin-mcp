# Object: `CalculatedReturnLineItem`

A calculated return line item.

## Fields

- `fulfillmentLineItem`: `FulfillmentLineItem!` — The fulfillment line item from which items are returned.
- `id`: `ID` — A globally-unique ID.
- `quantity`: `Int!` — The quantity being returned.
- `restockingFee`: `CalculatedRestockingFee` — The restocking fee of the return line item.
- `subtotalBeforeOrderDiscountsSet`: `MoneyBag!` — The subtotal of the return line item before order discounts.
- `subtotalSet`: `MoneyBag!` — The subtotal of the return line item.
- `totalTaxSet`: `MoneyBag!` — The total tax of the return line item.

## Related Types

- [CalculatedRestockingFee](../../types/objects/CalculatedRestockingFee.md)
- [FulfillmentLineItem](../../types/objects/FulfillmentLineItem.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
