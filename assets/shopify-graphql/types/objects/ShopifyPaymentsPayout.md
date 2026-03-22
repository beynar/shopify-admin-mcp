# Object: `ShopifyPaymentsPayout`

A transfer of funds between a merchant's Shopify Payments balance and their [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount). Provides the [net amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.net), [issue date](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-ShopifyPaymentsPayout.fields.issuedAt), and current [`ShopifyPaymentsPayoutStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutStatus).

The payout includes a [`ShopifyPaymentsPayoutSummary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSummary) that breaks down fees and gross amounts by transaction type, such as charges, refunds, and adjustments. The [`ShopifyPaymentsPayoutTransactionType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsPayoutTransactionType) indicates whether funds move into the bank account (deposit) or back to Shopify Payments (withdrawal).

**Implements:** `LegacyInteroperability`, `Node`

## Fields

- `bankAccount`: `ShopifyPaymentsBankAccount` *(deprecated)* — The bank account for the payout.
- `businessEntity`: `BusinessEntity!` — The business entity associated with the payout.
- `externalTraceId`: `String` — A unique trace ID from the financial institution. Use this reference number to track the payout with your provider.
- `gross`: `MoneyV2!` *(deprecated)* — The total amount and currency of the payout.
- `id`: `ID!` — A globally-unique ID.
- `issuedAt`: `DateTime!` — The exact time when the payout was issued. The payout only contains
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `net`: `MoneyV2!` — The total amount and currency of the payout.
- `status`: `ShopifyPaymentsPayoutStatus!` — The transfer status of the payout.
- `summary`: `ShopifyPaymentsPayoutSummary!` — The summary of the payout.
- `transactionType`: `ShopifyPaymentsPayoutTransactionType!` — The direction of the payout.

## Related Types

- [BusinessEntity](../../types/objects/BusinessEntity.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [ShopifyPaymentsBankAccount](../../types/objects/ShopifyPaymentsBankAccount.md)
- [ShopifyPaymentsPayoutStatus](../../types/enums/ShopifyPaymentsPayoutStatus.md)
- [ShopifyPaymentsPayoutSummary](../../types/objects/ShopifyPaymentsPayoutSummary.md)
- [ShopifyPaymentsPayoutTransactionType](../../types/enums/ShopifyPaymentsPayoutTransactionType.md)
