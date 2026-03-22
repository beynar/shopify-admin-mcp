# Object: `FulfillmentEvent`

A tracking event that records the status and location of a fulfillment at a specific point in time. Each event captures details such as the [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status) (for example, in transit, out for delivery, delivered) and any [messages](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.message) associated with the event.

Fulfillment events provide a chronological history of a package's journey from shipment to delivery. They include timestamps, geographic coordinates, and estimated delivery dates to track fulfillment progress.

**Implements:** `Node`

## Fields

- `address1`: `String` — The street address where this fulfillment event occurred.
- `city`: `String` — The city where this fulfillment event occurred.
- `country`: `String` — The country where this fulfillment event occurred.
- `createdAt`: `DateTime!` — The date and time when the fulfillment event was created.
- `estimatedDeliveryAt`: `DateTime` — The estimated delivery date and time of the fulfillment.
- `happenedAt`: `DateTime!` — The time at which this fulfillment event happened.
- `id`: `ID!` — A globally-unique ID.
- `latitude`: `Float` — The latitude where this fulfillment event occurred.
- `longitude`: `Float` — The longitude where this fulfillment event occurred.
- `message`: `String` — A message associated with this fulfillment event.
- `province`: `String` — The province where this fulfillment event occurred.
- `status`: `FulfillmentEventStatus!` — The status of this fulfillment event.
- `zip`: `String` — The zip code of the location where this fulfillment event occurred.

## Related Types

- [FulfillmentEventStatus](../../types/enums/FulfillmentEventStatus.md)
