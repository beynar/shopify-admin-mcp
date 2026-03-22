# Query: `shopBillingPreferences`

**Returns:** `ShopBillingPreferences!`

The shop's billing preferences, including the currency for paying for apps and services. Use this to create [app charges in the merchant's local billing currency](https://shopify.dev/docs/apps/launch/billing#supported-currencies), helping them budget their app spend without exposure to exchange rate fluctuations.

## Return Type Fields

- `currency`: `CurrencyCode!` — The currency the shop uses to pay for apps and services.

## Related Types

- [CurrencyCode](../types/enums/CurrencyCode.md)
- [ShopBillingPreferences](../types/objects/ShopBillingPreferences.md)

## Example Query

```graphql
query {
  shopBillingPreferences {
  }
}
```
