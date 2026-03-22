# Input Object: `GiftCardUpdateInput`

The input fields to update a gift card.

## Input Fields

- `note`: `String` — The note associated with the gift card, which isn't visible to the customer.
- `expiresOn`: `Date` — The date at which the gift card will expire. If set to `null`, then the gift card will never expire.
- `customerId`: `ID` — The ID of the customer who will receive the gift card. The ID can't be changed if the gift card already has an assigned customer ID.
- `recipientAttributes`: `GiftCardRecipientInput` — The recipient attributes of the gift card.
- `templateSuffix`: `String` — The suffix of the Liquid template that's used to render the gift card online.

## Related Types

- [GiftCardRecipientInput](../../types/inputs/GiftCardRecipientInput.md)
