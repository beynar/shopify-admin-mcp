# Mutation: `giftCardDebit`

**Returns:** `GiftCardDebitPayload`

Debit a gift card.

## Arguments

- **`id`**: `ID!` — The ID of the gift card to be debited.
- **`debitInput`**: `GiftCardDebitInput!` — The input fields to debit a gift card.

## Payload Fields

- `giftCardDebitTransaction`: `GiftCardDebitTransaction` — The gift card debit transaction that was created.
- `userErrors`: `[GiftCardTransactionUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [GiftCardDebitInput](../types/inputs/GiftCardDebitInput.md)
- [GiftCardDebitPayload](../types/objects/GiftCardDebitPayload.md)
- [GiftCardDebitTransaction](../types/objects/GiftCardDebitTransaction.md)
- [GiftCardTransactionUserError](../types/objects/GiftCardTransactionUserError.md)

## Example Mutation

```graphql
mutation GiftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
  giftCardDebit(id: $id, debitInput: $debitInput) {
    giftCardDebitTransaction {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
