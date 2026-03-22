# Object: `CustomerAccountsV2`

Information about the shop's customer account-related settings. Includes the [customer account version](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.customerAccountsVersion) which indicates whether the merchant is using new customer accounts or legacy customer accounts, along with other account configuration such as login requirements.

## Fields

- `customerAccountsVersion`: `CustomerAccountsVersion!` — Indicates which version of customer accounts the merchant is using in online store and checkout.
- `loginLinksVisibleOnStorefrontAndCheckout`: `Boolean!` — Login links are shown in online store and checkout.
- `loginRequiredAtCheckout`: `Boolean!` — Customers are required to log in to their account before checkout.
- `url`: `URL` — The root url for the customer accounts pages.

## Related Types

- [CustomerAccountsVersion](../../types/enums/CustomerAccountsVersion.md)
