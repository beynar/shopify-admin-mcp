# Object: `GiftCardRecipient`

Represents a recipient who will receive the issued gift card.

## Fields

- `message`: `String` — The message sent with the gift card.
- `preferredName`: `String` — The preferred name of the recipient who will receive the gift card.
- `recipient`: `Customer!` — The recipient who will receive the gift card.
- `sendNotificationAt`: `DateTime` — The scheduled datetime on which the gift card will be sent to the recipient. The gift card will be sent within an hour of the specified datetime.

## Related Types

- [Customer](../../types/objects/Customer.md)
