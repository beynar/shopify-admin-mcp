# Object: `StoreCreditAccountExpirationTransaction`

An expiration transaction which decreases the store credit account balance.
Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

**Implements:** `StoreCreditAccountTransaction`

## Fields

- `account`: `StoreCreditAccount!` — The store credit account that the transaction belongs to.
- `amount`: `MoneyV2!` — The amount of the transaction.
- `balanceAfterTransaction`: `MoneyV2!` — The balance of the account after the transaction.
- `createdAt`: `DateTime!` — The date and time when the transaction was created.
- `creditTransaction`: `StoreCreditAccountCreditTransaction!` — The credit transaction which expired.
- `event`: `StoreCreditSystemEvent!` — The event that caused the store credit account transaction.
- `origin`: `StoreCreditAccountTransactionOrigin` — The origin of the store credit account transaction.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [StoreCreditAccount](../../types/objects/StoreCreditAccount.md)
- [StoreCreditAccountCreditTransaction](../../types/objects/StoreCreditAccountCreditTransaction.md)
- [StoreCreditAccountTransactionOrigin](../../types/unions/StoreCreditAccountTransactionOrigin.md)
- [StoreCreditSystemEvent](../../types/enums/StoreCreditSystemEvent.md)
