# Object: `MarketLocalization`

The market localization of a field within a resource, which is determined by the market ID.

## Fields

- `key`: `String!` — A reference to the value being localized on the resource that this market localization belongs to.
- `market`: `Market!` — The market that the localization is specific to.
- `outdated`: `Boolean!` — Whether the original content has changed since this market localization was updated.
- `updatedAt`: `DateTime` — The date and time when the market localization was updated.
- `value`: `String` — The value of the market localization.

## Related Types

- [Market](../../types/objects/Market.md)
