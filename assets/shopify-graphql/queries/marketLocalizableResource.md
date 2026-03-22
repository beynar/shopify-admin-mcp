# Query: `marketLocalizableResource`

**Returns:** `MarketLocalizableResource`

A resource that can have localized values for different markets.

## Arguments

- **`resourceId`**: `ID!` — Find a market localizable resource by ID.

## Return Type Fields

- `marketLocalizableContent`: `[MarketLocalizableContent!]!` — The market localizable content.
- `marketLocalizations`: `[MarketLocalization!]!` — Market localizations for the market localizable content.
- `resourceId`: `ID!` — The GID of the resource.

## Related Types

- [MarketLocalizableContent](../types/objects/MarketLocalizableContent.md)
- [MarketLocalizableResource](../types/objects/MarketLocalizableResource.md)
- [MarketLocalization](../types/objects/MarketLocalization.md)

## Example Query

```graphql
query MarketLocalizableResource($resourceId: ID!) {
  marketLocalizableResource(resourceId: $resourceId) {
    resourceId
  }
}
```
