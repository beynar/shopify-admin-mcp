# Object: `ShopifyPaymentsExtendedAuthorization`

Presents all Shopify Payments information related to an extended authorization.

## Fields

- `extendedAuthorizationExpiresAt`: `DateTime!` — The time after which the extended authorization expires. After the expiry, the merchant is unable to capture the payment.
- `standardAuthorizationExpiresAt`: `DateTime!` — The time after which capture will incur an additional fee.
