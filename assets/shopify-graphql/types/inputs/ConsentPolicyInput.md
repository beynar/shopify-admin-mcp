# Input Object: `ConsentPolicyInput`

The input fields for a consent policy to be updated or created.

## Input Fields

- `countryCode`: `PrivacyCountryCode` — The `ISO 3166` country code for which the policy applies.
- `regionCode`: `String` — The `ISO 3166` region code for which the policy applies.
- `consentRequired`: `Boolean` — Whether consent is required for the region.
- `dataSaleOptOutRequired`: `Boolean` — Whether data sale opt-out is required for the region.

## Related Types

- [PrivacyCountryCode](../../types/enums/PrivacyCountryCode.md)
