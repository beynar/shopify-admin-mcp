# Object: `SaleAdditionalFee`

The additional fee details for a line item.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the additional fee.
- `price`: `MoneyBag!` — The price of the additional fee.
- `taxLines`: `[TaxLine!]!` — A list of taxes charged on the additional fee.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [TaxLine](../../types/objects/TaxLine.md)
