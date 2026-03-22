# Interface: `StoreCreditAccountTransaction`

Interface for a store credit account transaction.

## Fields

- `account`: `StoreCreditAccount!` — The store credit account that the transaction belongs to.
- `amount`: `MoneyV2!` — The amount of the transaction.
- `balanceAfterTransaction`: `MoneyV2!` — The balance of the account after the transaction.
- `createdAt`: `DateTime!` — The date and time when the transaction was created.
- `event`: `StoreCreditSystemEvent!` — The event that caused the store credit account transaction.
- `origin`: `StoreCreditAccountTransactionOrigin` — The origin of the store credit account transaction.

## Possible Types

- [StoreCreditAccountCreditTransaction](../../types/objects/StoreCreditAccountCreditTransaction.md)
- [StoreCreditAccountDebitRevertTransaction](../../types/objects/StoreCreditAccountDebitRevertTransaction.md)
- [StoreCreditAccountDebitTransaction](../../types/objects/StoreCreditAccountDebitTransaction.md)
- [StoreCreditAccountExpirationTransaction](../../types/objects/StoreCreditAccountExpirationTransaction.md)

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [StoreCreditAccount](../../types/objects/StoreCreditAccount.md)
- [StoreCreditAccountTransactionOrigin](../../types/unions/StoreCreditAccountTransactionOrigin.md)
- [StoreCreditSystemEvent](../../types/enums/StoreCreditSystemEvent.md)
