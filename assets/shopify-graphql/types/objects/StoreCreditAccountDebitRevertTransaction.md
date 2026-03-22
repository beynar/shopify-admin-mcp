# Object: `StoreCreditAccountDebitRevertTransaction`

A debit revert transaction which increases the store credit account balance.
Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout.
The amount added to the balance is equal to the amount reverted on the original credit.

**Implements:** `Node`, `StoreCreditAccountTransaction`

## Fields

- `account`: `StoreCreditAccount!` — The store credit account that the transaction belongs to.
- `amount`: `MoneyV2!` — The amount of the transaction.
- `balanceAfterTransaction`: `MoneyV2!` — The balance of the account after the transaction.
- `createdAt`: `DateTime!` — The date and time when the transaction was created.
- `debitTransaction`: `StoreCreditAccountDebitTransaction!` — The reverted debit transaction.
- `event`: `StoreCreditSystemEvent!` — The event that caused the store credit account transaction.
- `id`: `ID!` — A globally-unique ID.
- `origin`: `StoreCreditAccountTransactionOrigin` — The origin of the store credit account transaction.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [StoreCreditAccount](../../types/objects/StoreCreditAccount.md)
- [StoreCreditAccountDebitTransaction](../../types/objects/StoreCreditAccountDebitTransaction.md)
- [StoreCreditAccountTransactionOrigin](../../types/unions/StoreCreditAccountTransactionOrigin.md)
- [StoreCreditSystemEvent](../../types/enums/StoreCreditSystemEvent.md)
