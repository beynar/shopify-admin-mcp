# Object: `ShopifyPaymentsBankAccount`

A bank account that can receive payouts.

**Implements:** `Node`

## Fields

- `accountNumberLastDigits`: `String!` — The last digits of the account number (the rest is redacted).
- `bankName`: `String` — The name of the bank.
- `country`: `CountryCode!` — The country of the bank.
- `createdAt`: `DateTime!` — The date that the bank account was created.
- `currency`: `CurrencyCode!` — The currency of the bank account.
- `id`: `ID!` — A globally-unique ID.
- `payouts` `(transactionType, first, after, last, before, reverse, sortKey, query, savedSearchId)`: `ShopifyPaymentsPayoutConnection!` — All current and previous payouts made between the account and the bank account.
- `status`: `ShopifyPaymentsBankAccountStatus!` — The status of the bank account.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [PayoutSortKeys](../../types/enums/PayoutSortKeys.md)
- [ShopifyPaymentsBankAccountStatus](../../types/enums/ShopifyPaymentsBankAccountStatus.md)
- [ShopifyPaymentsPayoutTransactionType](../../types/enums/ShopifyPaymentsPayoutTransactionType.md)
