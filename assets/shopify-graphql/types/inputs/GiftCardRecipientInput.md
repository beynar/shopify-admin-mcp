# Input Object: `GiftCardRecipientInput`

The input fields to add a recipient to a gift card.

## Input Fields

- `id`: `ID!` — The ID of the customer who will be the recipient of the gift card. Requires `write_customers` access_scope.
- `preferredName`: `String` — The preferred name of the recipient.
- `message`: `String` — The personalized message intended for the recipient.
- `sendNotificationAt`: `DateTime` — The scheduled datetime on which the gift card will be sent to the recipient. The gift card will be sent within an hour of the specified datetime.
