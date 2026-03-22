# Input Object: `MarketConditionsRegionsInput`

The input fields required to create or update a region market condition.

## Input Fields

- `regionIds`: `[ID!]` — A list of market region IDs to include in the market condition.
- `regions`: `[MarketConditionsRegionInput!]` — A list of market regions to include in the market condition.
- `applicationLevel`: `MarketConditionApplicationType` — A type of market condition (e.g. ALL) to apply.

## Related Types

- [MarketConditionApplicationType](../../types/enums/MarketConditionApplicationType.md)
- [MarketConditionsRegionInput](../../types/inputs/MarketConditionsRegionInput.md)
