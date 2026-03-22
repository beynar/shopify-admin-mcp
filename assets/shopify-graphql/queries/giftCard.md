# Query: `giftCard`

**Returns:** `GiftCard`

Retrieves a [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) by its ID. Returns the gift card's balance, transaction history, [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) information, and whether it's enabled.

Additional fields include the initial value, expiration date, deactivation timestamp (if applicable), and the associated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) if the gift card was purchased by a customer through checkout. Gift cards that merchants create manually won't have an associated order.

## Arguments

- **`id`**: `ID!` — The ID of the GiftCard to return.

## Return Type Fields

- `balance`: `MoneyV2!` — The gift card's remaining balance.
- `createdAt`: `DateTime!` — The date and time at which the gift card was created.
- `customer`: `Customer` — The customer who will receive the gift card.
- `deactivatedAt`: `DateTime` — The date and time at which the gift card was deactivated.
- `enabled`: `Boolean!` — Whether the gift card is enabled.
- `expiresOn`: `Date` — The date at which the gift card will expire.
- `id`: `ID!` — A globally-unique ID.
- `initialValue`: `MoneyV2!` — The initial value of the gift card.
- `lastCharacters`: `String!` — The final four characters of the gift card code.
- `maskedCode`: `String!` — The gift card code. Everything but the final four characters is masked.
- `note`: `String` — The note associated with the gift card, which isn't visible to the customer.
- `order`: `Order` — The order associated with the gift card. This value is `null` if the gift card was issued manually.
- `recipientAttributes`: `GiftCardRecipient` — The recipient who will receive the gift card.
- `templateSuffix`: `String` — The theme template used to render the gift card online.
- `transactions`: `GiftCardTransactionConnection` — The transaction history of the gift card.
- `updatedAt`: `DateTime!` — The date and time at which the gift card was updated.

## Related Types

- [Customer](../types/objects/Customer.md)
- [GiftCard](../types/objects/GiftCard.md)
- [GiftCardRecipient](../types/objects/GiftCardRecipient.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [Order](../types/objects/Order.md)

## Example Query

```graphql
query GiftCard($id: ID!) {
  giftCard(id: $id) {
    createdAt
    deactivatedAt
    enabled
    lastCharacters
  }
}
```
