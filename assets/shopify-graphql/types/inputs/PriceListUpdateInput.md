# Input Object: `PriceListUpdateInput`

The input fields used to update a price list.

## Input Fields

- `name`: `String` — The unique name of the price list, used as a human-readable identifier.
- `currency`: `CurrencyCode` — The three-letter currency code for fixed prices associated with this price list.
- `parent`: `PriceListParentUpdateInput` — Relative adjustments to other prices.
- `catalogId`: `ID` — The ID of the catalog to associate with this price list.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [PriceListParentUpdateInput](../../types/inputs/PriceListParentUpdateInput.md)
