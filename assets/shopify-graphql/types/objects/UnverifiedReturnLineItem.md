# Object: `UnverifiedReturnLineItem`

An unverified return line item.

**Implements:** `Node`, `ReturnLineItemType`

## Fields

- `customerNote`: `String` — A note from the customer that describes the item to be returned. Maximum length: 300 characters.
- `id`: `ID!` — A globally-unique ID.
- `processableQuantity`: `Int!` — The quantity that can be processed.
- `processedQuantity`: `Int!` — The quantity that has been processed.
- `quantity`: `Int!` — The quantity being returned.
- `refundableQuantity`: `Int!` — The quantity that can be refunded.
- `refundedQuantity`: `Int!` — The quantity that was refunded.
- `returnReason`: `ReturnReason!` *(deprecated)* — The reason for returning the item.
- `returnReasonDefinition`: `ReturnReasonDefinition` — The standardized reason for why the item is being returned.
- `returnReasonNote`: `String!` — Additional information about the reason for the return. Maximum length: 255 characters.
- `unitPrice`: `MoneyV2!` — The unit price of the unverified return line item.
- `unprocessedQuantity`: `Int!` — The quantity that has't been processed.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [ReturnReason](../../types/enums/ReturnReason.md)
- [ReturnReasonDefinition](../../types/objects/ReturnReasonDefinition.md)
