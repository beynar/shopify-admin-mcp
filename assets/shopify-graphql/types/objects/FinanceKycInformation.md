# Object: `FinanceKycInformation`

Shopify Payments account information shared with embedded finance applications.

## Fields

- `businessAddress`: `ShopifyPaymentsAddressBasic` — The legal entity business address.
- `businessType`: `ShopifyPaymentsBusinessType` — The legal entity business type.
- `industry`: `ShopifyPaymentsMerchantCategoryCode` — Business industry.
- `legalName`: `String` — Returns the business legal name.
- `shopOwner`: `FinancialKycShopOwner!` — The shop owner information for financial KYC purposes.
- `taxIdentification`: `ShopifyPaymentsTaxIdentification` — Tax identification information.

## Related Types

- [FinancialKycShopOwner](../../types/objects/FinancialKycShopOwner.md)
- [ShopifyPaymentsAddressBasic](../../types/objects/ShopifyPaymentsAddressBasic.md)
- [ShopifyPaymentsBusinessType](../../types/enums/ShopifyPaymentsBusinessType.md)
- [ShopifyPaymentsMerchantCategoryCode](../../types/objects/ShopifyPaymentsMerchantCategoryCode.md)
- [ShopifyPaymentsTaxIdentification](../../types/objects/ShopifyPaymentsTaxIdentification.md)
