# Object: `ConsentPolicy`

A consent policy describes the level of consent that the merchant requires from the user before actually
collecting and processing the data.

**Implements:** `Node`

## Fields

- `consentRequired`: `Boolean` — Whether consent is required for the region.
- `countryCode`: `PrivacyCountryCode` — The `ISO 3166` country code for which the policy applies.
- `dataSaleOptOutRequired`: `Boolean` — Whether data sale opt-out is required for the region.
- `id`: `ID!` — The global ID of the consent policy. IDs prefixed with `SD-` are system default policies.
- `regionCode`: `String` — The `ISO 3166` region code for which the policy applies.
- `shopId`: `ID!` — The global ID of the shop that owns the policy.

## Related Types

- [PrivacyCountryCode](../../types/enums/PrivacyCountryCode.md)
