# Mutation: `giftCardSendNotificationToCustomer`

**Returns:** `GiftCardSendNotificationToCustomerPayload`

Send notification to the customer of a gift card.

## Arguments

- **`id`**: `ID!` — The ID of the gift card to send.

## Payload Fields

- `giftCard`: `GiftCard` — The gift card that was sent.
- `userErrors`: `[GiftCardSendNotificationToCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [GiftCard](../types/objects/GiftCard.md)
- [GiftCardSendNotificationToCustomerPayload](../types/objects/GiftCardSendNotificationToCustomerPayload.md)
- [GiftCardSendNotificationToCustomerUserError](../types/objects/GiftCardSendNotificationToCustomerUserError.md)

## Example Mutation

```graphql
mutation GiftCardSendNotificationToCustomer($id: ID!) {
  giftCardSendNotificationToCustomer(id: $id) {
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
