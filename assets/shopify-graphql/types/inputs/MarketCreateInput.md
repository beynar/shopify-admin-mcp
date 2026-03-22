# Input Object: `MarketCreateInput`

The input fields required to create a market.

## Input Fields

- `name`: `String!` — The name of the market. Not shown to customers.
- `handle`: `String` — A unique identifier for the market. For example `"ca"`.
- `conditions`: `MarketConditionsInput` — The conditions that apply to the market.
- `catalogs`: `[ID!]` — Catalog IDs to include in the market.
- `makeDuplicateUniqueMarketsDraft`: `Boolean` — Whether to update duplicate region or wildcard markets' status to draft.
- `status`: `MarketStatus` — The status of the market.
- `webPresences`: `[ID!]` — Web presence IDs to include in the market.
- `currencySettings`: `MarketCurrencySettingsUpdateInput` — Currency settings for the market.
- `priceInclusions`: `MarketPriceInclusionsInput` — The strategy used to determine how prices are displayed to the customer.

## Related Types

- [MarketConditionsInput](../../types/inputs/MarketConditionsInput.md)
- [MarketCurrencySettingsUpdateInput](../../types/inputs/MarketCurrencySettingsUpdateInput.md)
- [MarketPriceInclusionsInput](../../types/inputs/MarketPriceInclusionsInput.md)
- [MarketStatus](../../types/enums/MarketStatus.md)
