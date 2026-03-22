# Object: `ShopifyPaymentsAccount`

Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

**Implements:** `Node`

## Fields

- `accountOpenerName`: `String` — The name of the account opener.
- `activated`: `Boolean!` — Whether the Shopify Payments setup is completed.
- `balance`: `[MoneyV2!]!` — Current balances in all currencies for the account.
- `balanceTransactions` `(hideTransfers, first, after, last, before, reverse, sortKey, query, savedSearchId)`: `ShopifyPaymentsBalanceTransactionConnection!` — A list of balance transactions associated with the shop.
- `bankAccounts` `(first, after, last, before, reverse)`: `ShopifyPaymentsBankAccountConnection!` — All bank accounts configured for the Shopify Payments account.
- `chargeStatementDescriptor`: `String` *(deprecated)* — The statement descriptor used for charges.
- `chargeStatementDescriptors`: `ShopifyPaymentsChargeStatementDescriptor` — The statement descriptors used for charges.
- `country`: `String!` — The Shopify Payments account country.
- `defaultCurrency`: `CurrencyCode!` — The default payout currency for the Shopify Payments account.
- `disputes` `(first, after, last, before, reverse, query)`: `ShopifyPaymentsDisputeConnection!` — All disputes that originated from a transaction made with the Shopify Payments account.
- `id`: `ID!` — A globally-unique ID.
- `onboardable`: `Boolean!` — Whether the Shopify Payments account can be onboarded.
- `payoutSchedule`: `ShopifyPaymentsPayoutSchedule!` — The payout schedule for the account.
- `payoutStatementDescriptor`: `String` — The descriptor used for payouts.
- `payouts` `(transactionType, first, after, last, before, reverse, sortKey, query, savedSearchId)`: `ShopifyPaymentsPayoutConnection!` — All current and previous payouts made between the account and the bank account.

## Related Types

- [BalanceTransactionSortKeys](../../types/enums/BalanceTransactionSortKeys.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [PayoutSortKeys](../../types/enums/PayoutSortKeys.md)
- [ShopifyPaymentsChargeStatementDescriptor](../../types/interfaces/ShopifyPaymentsChargeStatementDescriptor.md)
- [ShopifyPaymentsPayoutSchedule](../../types/objects/ShopifyPaymentsPayoutSchedule.md)
- [ShopifyPaymentsPayoutTransactionType](../../types/enums/ShopifyPaymentsPayoutTransactionType.md)
