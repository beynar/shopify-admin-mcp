# Enum: `FulfillmentEventStatus`

The status that describes a fulfillment or delivery event.

## Values

- `LABEL_PURCHASED` — A shipping label has been purchased.
- `LABEL_PRINTED` — A purchased shipping label has been printed.
- `READY_FOR_PICKUP` — The fulfillment is ready to be picked up.
- `CONFIRMED` — The fulfillment is confirmed. This is the default value when no other information is available.
- `IN_TRANSIT` — The fulfillment is in transit.
- `OUT_FOR_DELIVERY` — The fulfillment is out for delivery.
- `ATTEMPTED_DELIVERY` — A delivery was attempted.
- `DELAYED` — The fulfillment is delayed.
- `DELIVERED` — The fulfillment was successfully delivered.
- `FAILURE` — The fulfillment request failed.
- `CARRIER_PICKED_UP` — The fulfillment has been picked up by the carrier.
