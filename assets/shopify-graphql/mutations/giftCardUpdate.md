# Mutation: `giftCardUpdate`

**Returns:** `GiftCardUpdatePayload`

Update a gift card.

## Arguments

- **`id`**: `ID!` — The ID of the gift card to be updated.
- **`input`**: `GiftCardUpdateInput!` — The input fields to update the gift card.

## Payload Fields

- `giftCard`: `GiftCard` — The updated gift card.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [GiftCard](../types/objects/GiftCard.md)
- [GiftCardUpdateInput](../types/inputs/GiftCardUpdateInput.md)
- [GiftCardUpdatePayload](../types/objects/GiftCardUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation GiftCardUpdate($id: ID!, $input: GiftCardUpdateInput!) {
  giftCardUpdate(id: $id, input: $input) {
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
