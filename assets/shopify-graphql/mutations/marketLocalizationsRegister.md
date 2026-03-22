# Mutation: `marketLocalizationsRegister`

**Returns:** `MarketLocalizationsRegisterPayload`

Creates or updates market localizations.

## Arguments

- **`resourceId`**: `ID!` — The ID of the resource that is being localized within the context of a market.
- **`marketLocalizations`**: `[MarketLocalizationRegisterInput!]!` — The input fields for a market localization.

## Payload Fields

- `marketLocalizations`: `[MarketLocalization!]` — The market localizations that were created or updated.
- `userErrors`: `[TranslationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketLocalization](../types/objects/MarketLocalization.md)
- [MarketLocalizationRegisterInput](../types/inputs/MarketLocalizationRegisterInput.md)
- [MarketLocalizationsRegisterPayload](../types/objects/MarketLocalizationsRegisterPayload.md)
- [TranslationUserError](../types/objects/TranslationUserError.md)

## Example Mutation

```graphql
mutation MarketLocalizationsRegister($resourceId: ID!, $marketLocalizations: [MarketLocalizationRegisterInput!]!) {
  marketLocalizationsRegister(resourceId: $resourceId, marketLocalizations: $marketLocalizations) {
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
