# Input Object: `FulfillmentEventInput`

The input fields used to create a fulfillment event.

## Input Fields

- `address1`: `String` — The street address where this fulfillment event occurred.
- `city`: `String` — The city where this fulfillment event occurred.
- `country`: `String` — The country where this fulfillment event occurred.
- `estimatedDeliveryAt`: `DateTime` — The estimated delivery date and time of the fulfillment.
- `happenedAt`: `DateTime` — The time at which this fulfillment event happened.
- `fulfillmentId`: `ID!` — The ID for the fulfillment that's associated with this fulfillment event.
- `latitude`: `Float` — The latitude where this fulfillment event occurred.
- `longitude`: `Float` — The longitude where this fulfillment event occurred.
- `message`: `String` — A message associated with this fulfillment event.
- `province`: `String` — The province where this fulfillment event occurred.
- `status`: `FulfillmentEventStatus!` — The status of this fulfillment event.
- `zip`: `String` — The zip code of the location where this fulfillment event occurred.

## Related Types

- [FulfillmentEventStatus](../../types/enums/FulfillmentEventStatus.md)
