# Object: `ReverseDelivery`

A reverse delivery is a post-fulfillment object that represents a buyer sending a package to a merchant.
For example, a buyer requests a return, and a merchant sends the buyer a shipping label.
The reverse delivery contains the context of the items sent back, how they're being sent back
(for example, a shipping label), and the current state of the delivery (tracking information).

**Implements:** `Node`

## Fields

- `deliverable`: `ReverseDeliveryDeliverable` — The deliverable associated with the reverse delivery.
- `id`: `ID!` — The ID of the reverse delivery.
- `reverseDeliveryLineItems` `(first, after, last, before, reverse)`: `ReverseDeliveryLineItemConnection!` — The reverse delivery line items attached to the reverse delivery.
- `reverseFulfillmentOrder`: `ReverseFulfillmentOrder!` — The `ReverseFulfillmentOrder` associated with the reverse delivery.

## Related Types

- [ReverseDeliveryDeliverable](../../types/unions/ReverseDeliveryDeliverable.md)
- [ReverseFulfillmentOrder](../../types/objects/ReverseFulfillmentOrder.md)
