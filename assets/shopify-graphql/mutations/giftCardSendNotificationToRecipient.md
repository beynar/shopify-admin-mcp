# Mutation: `giftCardSendNotificationToRecipient`

**Returns:** `GiftCardSendNotificationToRecipientPayload`

Send notification to the recipient of a gift card.

## Arguments

- **`id`**: `ID!` — The ID of the gift card to send.

## Payload Fields

- `giftCard`: `GiftCard` — The gift card that was sent.
- `userErrors`: `[GiftCardSendNotificationToRecipientUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [GiftCard](../types/objects/GiftCard.md)
- [GiftCardSendNotificationToRecipientPayload](../types/objects/GiftCardSendNotificationToRecipientPayload.md)
- [GiftCardSendNotificationToRecipientUserError](../types/objects/GiftCardSendNotificationToRecipientUserError.md)

## Example Mutation

```graphql
mutation GiftCardSendNotificationToRecipient($id: ID!) {
  giftCardSendNotificationToRecipient(id: $id) {
    giftCard {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
