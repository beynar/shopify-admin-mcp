# Query: `consentPolicy`

**Returns:** `[ConsentPolicy!]!`

Returns the customer privacy consent policies of a shop.

## Arguments

- **`id`**: `ID` — Return the policy with the provided ID.
- **`countryCode`**: `PrivacyCountryCode` — Return policies with the provided country code.
- **`regionCode`**: `String` — Return policies with the provided region code.
- **`consentRequired`**: `Boolean` — Return policies where consent is required or not.
- **`dataSaleOptOutRequired`**: `Boolean` — Return policies where data sale opt out is required or not.

## Return Type Fields

- `consentRequired`: `Boolean` — Whether consent is required for the region.
- `countryCode`: `PrivacyCountryCode` — The `ISO 3166` country code for which the policy applies.
- `dataSaleOptOutRequired`: `Boolean` — Whether data sale opt-out is required for the region.
- `id`: `ID!` — The global ID of the consent policy. IDs prefixed with `SD-` are system default policies.
- `regionCode`: `String` — The `ISO 3166` region code for which the policy applies.
- `shopId`: `ID!` — The global ID of the shop that owns the policy.

## Related Types

- [ConsentPolicy](../types/objects/ConsentPolicy.md)
- [PrivacyCountryCode](../types/enums/PrivacyCountryCode.md)

## Example Query

```graphql
query ConsentPolicy($id: ID, $countryCode: PrivacyCountryCode, $regionCode: String, $consentRequired: Boolean, $dataSaleOptOutRequired: Boolean) {
  consentPolicy(id: $id, countryCode: $countryCode, regionCode: $regionCode, consentRequired: $consentRequired, dataSaleOptOutRequired: $dataSaleOptOutRequired) {
    consentRequired
    dataSaleOptOutRequired
    regionCode
    shopId
  }
}
```
