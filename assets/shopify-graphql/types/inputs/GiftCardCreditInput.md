# Input Object: `GiftCardCreditInput`

The input fields for a gift card credit transaction.

## Input Fields

- `creditAmount`: `MoneyInput!` — The amount to credit the gift card.
- `note`: `String` — A note about the credit.
- `processedAt`: `DateTime` — The date and time the credit was processed. Defaults to current date and time.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
