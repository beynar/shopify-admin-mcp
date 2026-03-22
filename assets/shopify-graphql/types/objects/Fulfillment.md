# Object: `Fulfillment`

A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

**Implements:** `LegacyInteroperability`, `Node`

## Fields

- `createdAt`: `DateTime!` — The date and time when the fulfillment was created.
- `deliveredAt`: `DateTime` — The date that this fulfillment was delivered.
- `displayStatus`: `FulfillmentDisplayStatus` — Human readable display status for this fulfillment.
- `estimatedDeliveryAt`: `DateTime` — The estimated date that this fulfillment will arrive.
- `events` `(first, after, last, before, reverse, sortKey)`: `FulfillmentEventConnection!` — The history of events associated with this fulfillment.
- `fulfillmentLineItems` `(first, after, last, before, reverse)`: `FulfillmentLineItemConnection!` — List of the fulfillment's line items.
- `fulfillmentOrders` `(first, after, last, before, reverse)`: `FulfillmentOrderConnection!` — A paginated list of fulfillment orders for the fulfillment.
- `id`: `ID!` — A globally-unique ID.
- `inTransitAt`: `DateTime` — The date and time when the fulfillment went into transit.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `location`: `Location` — The location that the fulfillment was processed at.
- `name`: `String!` — Human readable reference identifier for this fulfillment.
- `order`: `Order!` — The order for which the fulfillment was created.
- `originAddress`: `FulfillmentOriginAddress` — The address at which the fulfillment occurred. This field is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead.
- `requiresShipping`: `Boolean!` — Whether any of the line items in the fulfillment require shipping.
- `service`: `FulfillmentService` — Fulfillment service associated with the fulfillment.
- `status`: `FulfillmentStatus!` — The status of the fulfillment.
- `totalQuantity`: `Int!` — Sum of all line item quantities for the fulfillment.
- `trackingInfo` `(first)`: `[FulfillmentTrackingInfo!]!` — Tracking information associated with the fulfillment,
- `updatedAt`: `DateTime!` — The date and time when the fulfillment was last modified.

## Related Types

- [FulfillmentDisplayStatus](../../types/enums/FulfillmentDisplayStatus.md)
- [FulfillmentEventSortKeys](../../types/enums/FulfillmentEventSortKeys.md)
- [FulfillmentOriginAddress](../../types/objects/FulfillmentOriginAddress.md)
- [FulfillmentService](../../types/objects/FulfillmentService.md)
- [FulfillmentStatus](../../types/enums/FulfillmentStatus.md)
- [FulfillmentTrackingInfo](../../types/objects/FulfillmentTrackingInfo.md)
- [Location](../../types/objects/Location.md)
- [Order](../../types/objects/Order.md)
