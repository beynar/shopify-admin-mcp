# Query: `shopifyPaymentsAccount`

**Returns:** `ShopifyPaymentsAccount`

Returns the Shopify Payments account information for the shop. Includes current balances across all currencies, payout schedules, and bank account configurations.

The account includes [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records showing charges, refunds, and adjustments that affect your balance. Also includes [`ShopifyPaymentsDispute`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute) records and [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) history between the account and connected [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) configurations.

## Return Type Fields

- `accountOpenerName`: `String` — The name of the account opener.
- `activated`: `Boolean!` — Whether the Shopify Payments setup is completed.
- `balance`: `[MoneyV2!]!` — Current balances in all currencies for the account.
- `balanceTransactions`: `ShopifyPaymentsBalanceTransactionConnection!` — A list of balance transactions associated with the shop.
- `bankAccounts`: `ShopifyPaymentsBankAccountConnection!` — All bank accounts configured for the Shopify Payments account.
- `chargeStatementDescriptors`: `ShopifyPaymentsChargeStatementDescriptor` — The statement descriptors used for charges.
- `country`: `String!` — The Shopify Payments account country.
- `defaultCurrency`: `CurrencyCode!` — The default payout currency for the Shopify Payments account.
- `disputes`: `ShopifyPaymentsDisputeConnection!` — All disputes that originated from a transaction made with the Shopify Payments account.
- `id`: `ID!` — A globally-unique ID.
- `onboardable`: `Boolean!` — Whether the Shopify Payments account can be onboarded.
- `payoutSchedule`: `ShopifyPaymentsPayoutSchedule!` — The payout schedule for the account.
- `payoutStatementDescriptor`: `String` — The descriptor used for payouts.
- `payouts`: `ShopifyPaymentsPayoutConnection!` — All current and previous payouts made between the account and the bank account.

## Related Types

- [CurrencyCode](../types/enums/CurrencyCode.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [ShopifyPaymentsAccount](../types/objects/ShopifyPaymentsAccount.md)
- [ShopifyPaymentsChargeStatementDescriptor](../types/interfaces/ShopifyPaymentsChargeStatementDescriptor.md)
- [ShopifyPaymentsPayoutSchedule](../types/objects/ShopifyPaymentsPayoutSchedule.md)

## Example Query

```graphql
query {
  shopifyPaymentsAccount {
    accountOpenerName
    activated
    country
    onboardable
  }
}
```
