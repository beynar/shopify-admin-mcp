# Object: `CalculatedShippingLine`

A shipping line item involved in order editing that may be newly added or have new changes applied.

## Fields

- `id`: `ID` — A globally-unique ID.
- `price`: `MoneyBag!` — The price of the shipping line when sold and before applying discounts. This field includes taxes if `Order.taxesIncluded` is true. Otherwise, this field doesn't include taxes for the shipping line.
- `stagedStatus`: `CalculatedShippingLineStagedStatus!` — The staged status of the shipping line.
- `title`: `String!` — The title of the shipping line.

## Related Types

- [CalculatedShippingLineStagedStatus](../../types/enums/CalculatedShippingLineStagedStatus.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
