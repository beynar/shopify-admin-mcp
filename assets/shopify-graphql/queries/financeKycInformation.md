# Query: `financeKycInformation`

**Returns:** `FinanceKycInformation`

Returns the KYC information for the shop's Shopify Payments account, used in embedded finance apps.

## Return Type Fields

- `businessAddress`: `ShopifyPaymentsAddressBasic` — The legal entity business address.
- `businessType`: `ShopifyPaymentsBusinessType` — The legal entity business type.
- `industry`: `ShopifyPaymentsMerchantCategoryCode` — Business industry.
- `legalName`: `String` — Returns the business legal name.
- `shopOwner`: `FinancialKycShopOwner!` — The shop owner information for financial KYC purposes.
- `taxIdentification`: `ShopifyPaymentsTaxIdentification` — Tax identification information.

## Related Types

- [FinanceKycInformation](../types/objects/FinanceKycInformation.md)
- [FinancialKycShopOwner](../types/objects/FinancialKycShopOwner.md)
- [ShopifyPaymentsAddressBasic](../types/objects/ShopifyPaymentsAddressBasic.md)
- [ShopifyPaymentsBusinessType](../types/enums/ShopifyPaymentsBusinessType.md)
- [ShopifyPaymentsMerchantCategoryCode](../types/objects/ShopifyPaymentsMerchantCategoryCode.md)
- [ShopifyPaymentsTaxIdentification](../types/objects/ShopifyPaymentsTaxIdentification.md)

## Example Query

```graphql
query {
  financeKycInformation {
    legalName
  }
}
```
