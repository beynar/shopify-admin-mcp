# Query: `marketsResolvedValues`

**Returns:** `MarketsResolvedValues!`

The resolved values for a buyer signal.

## Arguments

- **`buyerSignal`**: `BuyerSignalInput!` — The buyer signal.

## Return Type Fields

- `catalogs`: `MarketCatalogConnection!` — The resolved catalogs.
- `currencyCode`: `CurrencyCode!` — The resolved currency code.
- `priceInclusivity`: `ResolvedPriceInclusivity!` — The resolved price inclusivity attributes.
- `webPresences`: `MarketWebPresenceConnection!` — The resolved web presences ordered by priority.

## Related Types

- [BuyerSignalInput](../types/inputs/BuyerSignalInput.md)
- [CurrencyCode](../types/enums/CurrencyCode.md)
- [MarketsResolvedValues](../types/objects/MarketsResolvedValues.md)
- [ResolvedPriceInclusivity](../types/objects/ResolvedPriceInclusivity.md)

## Example Query

```graphql
query MarketsResolvedValues($buyerSignal: BuyerSignalInput!) {
  marketsResolvedValues(buyerSignal: $buyerSignal) {
  }
}
```
