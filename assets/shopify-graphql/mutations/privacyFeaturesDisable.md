# Mutation: `privacyFeaturesDisable`

**Returns:** `PrivacyFeaturesDisablePayload`

Disable a shop's privacy features.

## Arguments

- **`featuresToDisable`**: `[PrivacyFeaturesEnum!]!` — The list of privacy features to disable.

## Payload Fields

- `featuresDisabled`: `[PrivacyFeaturesEnum!]` — The privacy features that were disabled.
- `userErrors`: `[PrivacyFeaturesDisableUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PrivacyFeaturesDisablePayload](../types/objects/PrivacyFeaturesDisablePayload.md)
- [PrivacyFeaturesDisableUserError](../types/objects/PrivacyFeaturesDisableUserError.md)
- [PrivacyFeaturesEnum](../types/enums/PrivacyFeaturesEnum.md)

## Example Mutation

```graphql
mutation PrivacyFeaturesDisable($featuresToDisable: [PrivacyFeaturesEnum!]!) {
  privacyFeaturesDisable(featuresToDisable: $featuresToDisable) {
    featuresDisabled {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
