# Object: `Duty`

The duty details for a line item.

**Implements:** `Node`

## Fields

- `countryCodeOfOrigin`: `CountryCode` — The ISO 3166-1 alpha-2 country code of the country of origin used in calculating the duty.
- `harmonizedSystemCode`: `String` — The harmonized system code of the item used in calculating the duty.
- `id`: `ID!` — A globally-unique ID.
- `price`: `MoneyBag!` — The amount of the duty.
- `taxLines`: `[TaxLine!]!` — A list of taxes charged on the duty.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [TaxLine](../../types/objects/TaxLine.md)
