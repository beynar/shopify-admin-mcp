# Mutation: `giftCardCredit`

**Returns:** `GiftCardCreditPayload`

Credit a gift card.

## Arguments

- **`id`**: `ID!` — The ID of the gift card to be credited.
- **`creditInput`**: `GiftCardCreditInput!` — The input fields to credit a gift card.

## Payload Fields

- `giftCardCreditTransaction`: `GiftCardCreditTransaction` — The gift card credit transaction that was created.
- `userErrors`: `[GiftCardTransactionUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [GiftCardCreditInput](../types/inputs/GiftCardCreditInput.md)
- [GiftCardCreditPayload](../types/objects/GiftCardCreditPayload.md)
- [GiftCardCreditTransaction](../types/objects/GiftCardCreditTransaction.md)
- [GiftCardTransactionUserError](../types/objects/GiftCardTransactionUserError.md)

## Example Mutation

```graphql
mutation GiftCardCredit($id: ID!, $creditInput: GiftCardCreditInput!) {
  giftCardCredit(id: $id, creditInput: $creditInput) {
    giftCardCreditTransaction {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
