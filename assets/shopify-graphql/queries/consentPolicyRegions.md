# Query: `consentPolicyRegions`

**Returns:** `[ConsentPolicyRegion!]!`

List of countries and regions for which consent policies can be created or updated.

## Return Type Fields

- `countryCode`: `PrivacyCountryCode` — The `ISO 3166` country code for which the policy applies.
- `regionCode`: `String` — The `ISO 3166` region code for which the policy applies.

## Related Types

- [ConsentPolicyRegion](../types/objects/ConsentPolicyRegion.md)
- [PrivacyCountryCode](../types/enums/PrivacyCountryCode.md)

## Example Query

```graphql
query {
  consentPolicyRegions {
    regionCode
  }
}
```
