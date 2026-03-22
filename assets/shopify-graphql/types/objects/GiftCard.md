# Object: `GiftCard`

A gift card that customers use as a payment method. Stores the initial value, current balance, and expiration date.

You can issue gift cards to a specific [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or send them to a [`GiftCardRecipient`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient) with a personalized message. The card tracks its transaction history through [`GiftCardCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction) and [`GiftCardDebitTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction) records. You can create and deactivate gift cards using the [`GiftCardCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate) and [`GiftCardDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate) mutations, respectively.

> Note: After a gift card is deactivated, it can't be used for further purchases or re-enabled.

**Implements:** `Node`

## Fields

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
- `transactions` `(first, after, last, before, reverse)`: `GiftCardTransactionConnection` — The transaction history of the gift card.
- `updatedAt`: `DateTime!` — The date and time at which the gift card was updated.

## Related Types

- [Customer](../../types/objects/Customer.md)
- [GiftCardRecipient](../../types/objects/GiftCardRecipient.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [Order](../../types/objects/Order.md)
