# Input Object: `PriceListCreateInput`

The input fields to create a price list.

## Input Fields

- `name`: `String!` — The unique name of the price list, used as a human-readable identifier.
- `currency`: `CurrencyCode!` — Three letter currency code for fixed prices associated with this price list.
- `parent`: `PriceListParentCreateInput!` — Relative adjustments to other prices.
- `catalogId`: `ID` — The ID of the catalog to associate with this price list.If the catalog was already associated with another price list then it will be unlinked.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [PriceListParentCreateInput](../../types/inputs/PriceListParentCreateInput.md)
