# Mutation: `marketLocalizationsRemove`

**Returns:** `MarketLocalizationsRemovePayload`

Deletes market localizations.

## Arguments

- **`resourceId`**: `ID!` — The ID of the resource for which market localizations are being deleted.
- **`marketLocalizationKeys`**: `[String!]!` — The list of market localization keys.
- **`marketIds`**: `[ID!]!` — The list of market IDs.

## Payload Fields

- `marketLocalizations`: `[MarketLocalization!]` — The market localizations that were deleted.
- `userErrors`: `[TranslationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketLocalization](../types/objects/MarketLocalization.md)
- [MarketLocalizationsRemovePayload](../types/objects/MarketLocalizationsRemovePayload.md)
- [TranslationUserError](../types/objects/TranslationUserError.md)

## Example Mutation

```graphql
mutation MarketLocalizationsRemove($resourceId: ID!, $marketLocalizationKeys: [String!]!, $marketIds: [ID!]!) {
  marketLocalizationsRemove(resourceId: $resourceId, marketLocalizationKeys: $marketLocalizationKeys, marketIds: $marketIds) {
    marketLocalizations {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
