# Interface: `GiftCardTransaction`

Interface for a gift card transaction.

**Implements:** `HasMetafields`

## Fields

- `amount`: `MoneyV2!` — The amount of the transaction.
- `giftCard`: `GiftCard!` — The gift card that the transaction belongs to.
- `id`: `ID!` — The unique ID for the transaction.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `note`: `String` — A note about the transaction.
- `processedAt`: `DateTime!` — The date and time when the transaction was processed.

## Possible Types

- [GiftCardCreditTransaction](../../types/objects/GiftCardCreditTransaction.md)
- [GiftCardDebitTransaction](../../types/objects/GiftCardDebitTransaction.md)

## Related Types

- [GiftCard](../../types/objects/GiftCard.md)
- [Metafield](../../types/objects/Metafield.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
