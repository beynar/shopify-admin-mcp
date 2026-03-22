# Object: `MarketRegionDeletePayload`

Return type for `marketRegionDelete` mutation.

## Fields

- `deletedId`: `ID` — The ID of the deleted market region.
- `market`: `Market` — The parent market object of the deleted region.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../../types/objects/Market.md)
- [MarketUserError](../../types/objects/MarketUserError.md)
