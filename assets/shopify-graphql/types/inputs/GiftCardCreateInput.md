# Input Object: `GiftCardCreateInput`

The input fields to issue a gift card.

## Input Fields

- `initialValue`: `Decimal!` — The initial value of the gift card.
- `code`: `String` — The gift card's code. It must be 8-20 characters long and contain only letters(a-z) and numbers(0-9).
- `customerId`: `ID` — The ID of the customer who will receive the gift card. Requires `write_customers` access_scope.
- `expiresOn`: `Date` — The date at which the gift card will expire. If not provided, then the gift card will never expire.
- `note`: `String` — The note associated with the gift card, which isn't visible to the customer.
- `recipientAttributes`: `GiftCardRecipientInput` — The recipient attributes of the gift card.
- `templateSuffix`: `String` — The suffix of the Liquid template that's used to render the gift card online.

## Related Types

- [GiftCardRecipientInput](../../types/inputs/GiftCardRecipientInput.md)
