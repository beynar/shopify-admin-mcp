# Mutation: `giftCardCreate`

**Returns:** `GiftCardCreatePayload`

Creates a new [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) with a specified initial value. You can assign the gift card to a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or create it without assignment for manual distribution.

You can customize the gift card with an optional code, expiration date, and internal note. If you don't provide a code, the system generates a random 16 character alphanumeric code. The mutation also supports scheduling gift card notifications to recipients, with a personalized message, through the [`recipientAttributes`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-recipientAttributes) field on the `GiftCardCreateInput` input object.

## Arguments

- **`input`**: `GiftCardCreateInput!` — The input fields to create a gift card.

## Payload Fields

- `giftCard`: `GiftCard` — The created gift card.
- `giftCardCode`: `String` — The created gift card's code.
- `userErrors`: `[GiftCardUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [GiftCard](../types/objects/GiftCard.md)
- [GiftCardCreateInput](../types/inputs/GiftCardCreateInput.md)
- [GiftCardCreatePayload](../types/objects/GiftCardCreatePayload.md)
- [GiftCardUserError](../types/objects/GiftCardUserError.md)

## Example Mutation

```graphql
mutation GiftCardCreate($input: GiftCardCreateInput!) {
  giftCardCreate(input: $input) {
    giftCard {
      id
    }
    giftCardCode
    userErrors {
      field
      message
    }
  }
}
```
