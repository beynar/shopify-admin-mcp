# Object: `SaleTax`

The tax allocated to a sale from a single tax line.

## Fields

- `amount`: `MoneyBag!` — The portion of the total tax amount on the related sale that comes from the associated tax line.
- `id`: `ID!` — The unique ID for the sale tax.
- `taxLine`: `TaxLine!` — The tax line associated with the sale.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [TaxLine](../../types/objects/TaxLine.md)
