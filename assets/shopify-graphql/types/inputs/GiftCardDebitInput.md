# Input Object: `GiftCardDebitInput`

The input fields for a gift card debit transaction.

## Input Fields

- `debitAmount`: `MoneyInput!` — The amount to debit the gift card.
- `note`: `String` — A note about the debit.
- `processedAt`: `DateTime` — The date and time the debit was processed. Defaults to current date and time.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
