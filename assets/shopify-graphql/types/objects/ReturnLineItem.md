# Object: `ReturnLineItem`

An item that a customer returns from a fulfilled order. Links to the original [`FulfillmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem) and tracks quantities through the return process.

The line item includes the customer's reason for returning the item and any additional notes. It also tracks processing status with separate quantities for items that are processable, processed, refundable, and refunded. You can apply optional restocking fees to cover handling costs.

Learn more about [creating a return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate).

**Implements:** `Node`, `ReturnLineItemType`

## Fields

- `customerNote`: `String` — A note from the customer that describes the item to be returned. Maximum length: 300 characters.
- `fulfillmentLineItem`: `FulfillmentLineItem!` — The fulfillment line item from which items are returned.
- `id`: `ID!` — A globally-unique ID.
- `processableQuantity`: `Int!` — The quantity that can be processed.
- `processedQuantity`: `Int!` — The quantity that has been processed.
- `quantity`: `Int!` — The quantity being returned.
- `refundableQuantity`: `Int!` — The quantity that can be refunded.
- `refundedQuantity`: `Int!` — The quantity that was refunded.
- `restockingFee`: `RestockingFee` — The restocking fee for the return line item.
- `returnReason`: `ReturnReason!` *(deprecated)* — The reason for returning the item.
- `returnReasonDefinition`: `ReturnReasonDefinition` — The standardized reason for why the item is being returned.
- `returnReasonNote`: `String!` — Additional information about the reason for the return. Maximum length: 255 characters.
- `totalWeight`: `Weight` — The total weight of the item.
- `unprocessedQuantity`: `Int!` — The quantity that has't been processed.
- `withCodeDiscountedTotalPriceSet`: `MoneyBag!` — The total line price after all discounts on the line item, including both line item level discounts and code-based line item discounts, are applied.

## Related Types

- [FulfillmentLineItem](../../types/objects/FulfillmentLineItem.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [RestockingFee](../../types/objects/RestockingFee.md)
- [ReturnReason](../../types/enums/ReturnReason.md)
- [ReturnReasonDefinition](../../types/objects/ReturnReasonDefinition.md)
- [Weight](../../types/objects/Weight.md)
