# Query: `privacySettings`

**Returns:** `PrivacySettings!`

Privacy related settings for a shop.

## Return Type Fields

- `banner`: `CookieBanner` — Banner customizations for the 'cookie banner'.
- `dataSaleOptOutPage`: `DataSaleOptOutPage` — A shop's data sale opt out page (e.g. CCPA).
- `privacyPolicy`: `PrivacyPolicy` — A shop's privacy policy settings.

## Related Types

- [CookieBanner](../types/objects/CookieBanner.md)
- [DataSaleOptOutPage](../types/objects/DataSaleOptOutPage.md)
- [PrivacyPolicy](../types/objects/PrivacyPolicy.md)
- [PrivacySettings](../types/objects/PrivacySettings.md)

## Example Query

```graphql
query {
  privacySettings {
  }
}
```
