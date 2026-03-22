# Object: `ReverseFulfillmentOrder`

A group of one or more items in a return that will be processed at a fulfillment service.
There can be more than one reverse fulfillment order for a return at a given location.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `lineItems` `(first, after, last, before, reverse)`: `ReverseFulfillmentOrderLineItemConnection!` — The list of reverse fulfillment order line items for the reverse fulfillment order.
- `order`: `Order` — The order associated with the reverse fulfillment order.
- `reverseDeliveries` `(first, after, last, before, reverse)`: `ReverseDeliveryConnection!` — The list of reverse deliveries for the reverse fulfillment order.
- `status`: `ReverseFulfillmentOrderStatus!` — The status of the reverse fulfillment order.
- `thirdPartyConfirmation`: `ReverseFulfillmentOrderThirdPartyConfirmation` — The current confirmation for the reverse fulfillment order from a third-party logistics service.

## Related Types

- [Order](../../types/objects/Order.md)
- [ReverseFulfillmentOrderStatus](../../types/enums/ReverseFulfillmentOrderStatus.md)
- [ReverseFulfillmentOrderThirdPartyConfirmation](../../types/objects/ReverseFulfillmentOrderThirdPartyConfirmation.md)
