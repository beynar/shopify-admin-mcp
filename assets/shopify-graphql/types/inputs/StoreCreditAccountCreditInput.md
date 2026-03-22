# Input Object: `StoreCreditAccountCreditInput`

The input fields for a store credit account credit transaction.

## Input Fields

- `creditAmount`: `MoneyInput!` — The amount to credit the store credit account.
- `expiresAt`: `DateTime` — The date and time when the credit expires.
- `notify`: `Boolean` = `false` — Whether to send a notification to the account owner when the store credit is issued.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
