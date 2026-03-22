# Object: `FulfillmentOrderLocationForMove`

A location that a fulfillment order can potentially move to.

## Fields

- `availableLineItems` `(first, after, last, before, reverse)`: `FulfillmentOrderLineItemConnection!` — Fulfillment order line items that can be moved from their current location to the given location.
- `availableLineItemsCount`: `Count` — Total number of fulfillment order line items that can be moved from their current assigned location to the
- `location`: `Location!` — The location being considered as the fulfillment order's new assigned location.
- `message`: `String` — A human-readable string with the reason why the fulfillment order, or some of its line items, can't be
- `movable`: `Boolean!` — Whether the fulfillment order can be moved to the location.
- `unavailableLineItems` `(first, after, last, before, reverse)`: `FulfillmentOrderLineItemConnection!` — Fulfillment order line items that cannot be moved from their current location to the given location.
- `unavailableLineItemsCount`: `Count` — Total number of fulfillment order line items that can't be moved from their current assigned location to the

## Related Types

- [Count](../../types/objects/Count.md)
- [Location](../../types/objects/Location.md)
