# Input Object: `MarketUpdateInput`

The input fields used to update a market.

## Input Fields

- `name`: `String` — The name of the market. Not shown to customers.
- `handle`: `String` — A unique identifier for the market. For example `"ca"`.
- `conditions`: `MarketConditionsUpdateInput` — The conditions to update.
- `catalogsToAdd`: `[ID!]` — Catalog IDs to include in the market.
- `catalogsToDelete`: `[ID!]` — Catalog IDs to remove from the market.
- `webPresencesToAdd`: `[ID!]` — The web presences to add to the market.
- `webPresencesToDelete`: `[ID!]` — The web presences to remove from the market.
- `makeDuplicateUniqueMarketsDraft`: `Boolean` — Whether to update duplicate region or wildcard markets' status to draft.
- `status`: `MarketStatus` — The status of the market.
- `currencySettings`: `MarketCurrencySettingsUpdateInput` — Currency settings for the market.
- `removeCurrencySettings`: `Boolean` — Remove any currency settings that are defined for the market.
- `removePriceInclusions`: `Boolean` — The price inclusions to remove from the market.
- `priceInclusions`: `MarketPriceInclusionsInput` — The strategy used to determine how prices are displayed to the customer.

## Related Types

- [MarketConditionsUpdateInput](../../types/inputs/MarketConditionsUpdateInput.md)
- [MarketCurrencySettingsUpdateInput](../../types/inputs/MarketCurrencySettingsUpdateInput.md)
- [MarketPriceInclusionsInput](../../types/inputs/MarketPriceInclusionsInput.md)
- [MarketStatus](../../types/enums/MarketStatus.md)
