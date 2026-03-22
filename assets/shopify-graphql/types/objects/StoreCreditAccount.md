# Object: `StoreCreditAccount`

A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop.
The account is held in the specified currency and has an owner that cannot be transferred.

The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

**Implements:** `Node`

## Fields

- `balance`: `MoneyV2!` — The current balance of the store credit account.
- `id`: `ID!` — A globally-unique ID.
- `owner`: `HasStoreCreditAccounts!` — The owner of the store credit account.
- `transactions` `(first, after, last, before, reverse, sortKey, query)`: `StoreCreditAccountTransactionConnection!` — The transaction history of the store credit account.

## Related Types

- [HasStoreCreditAccounts](../../types/interfaces/HasStoreCreditAccounts.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [TransactionSortKeys](../../types/enums/TransactionSortKeys.md)
