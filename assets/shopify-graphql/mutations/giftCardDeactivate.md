# Mutation: `giftCardDeactivate`

**Returns:** `GiftCardDeactivatePayload`

Deactivate a gift card. A deactivated gift card cannot be used by a customer.
A deactivated gift card cannot be re-enabled.

## Arguments

- **`id`**: `ID!` — The ID of the gift card to deactivate.

## Payload Fields

- `giftCard`: `GiftCard` — The deactivated gift card.
- `userErrors`: `[GiftCardDeactivateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [GiftCard](../types/objects/GiftCard.md)
- [GiftCardDeactivatePayload](../types/objects/GiftCardDeactivatePayload.md)
- [GiftCardDeactivateUserError](../types/objects/GiftCardDeactivateUserError.md)

## Example Mutation

```graphql
mutation GiftCardDeactivate($id: ID!) {
  giftCardDeactivate(id: $id) {
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
