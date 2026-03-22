# Object: `StoreCreditAccountDebitTransaction`

A debit transaction which decreases the store credit account balance.

**Implements:** `Node`, `StoreCreditAccountTransaction`

## Fields

- `account`: `StoreCreditAccount!` — The store credit account that the transaction belongs to.
- `amount`: `MoneyV2!` — The amount of the transaction.
- `balanceAfterTransaction`: `MoneyV2!` — The balance of the account after the transaction.
- `createdAt`: `DateTime!` — The date and time when the transaction was created.
- `event`: `StoreCreditSystemEvent!` — The event that caused the store credit account transaction.
- `id`: `ID!` — A globally-unique ID.
- `origin`: `StoreCreditAccountTransactionOrigin` — The origin of the store credit account transaction.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [StoreCreditAccount](../../types/objects/StoreCreditAccount.md)
- [StoreCreditAccountTransactionOrigin](../../types/unions/StoreCreditAccountTransactionOrigin.md)
- [StoreCreditSystemEvent](../../types/enums/StoreCreditSystemEvent.md)
