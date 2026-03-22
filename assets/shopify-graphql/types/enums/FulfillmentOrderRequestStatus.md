# Enum: `FulfillmentOrderRequestStatus`

The request status of a fulfillment order.

## Values

- `UNSUBMITTED` — The initial request status for the newly-created fulfillment orders. This is the only valid
- `SUBMITTED` — The merchant requested fulfillment for this fulfillment order.
- `ACCEPTED` — The fulfillment service accepted the merchant's fulfillment request.
- `REJECTED` — The fulfillment service rejected the merchant's fulfillment request.
- `CANCELLATION_REQUESTED` — The merchant requested a cancellation of the fulfillment request for this fulfillment order.
- `CANCELLATION_ACCEPTED` — The fulfillment service accepted the merchant's fulfillment cancellation request.
- `CANCELLATION_REJECTED` — The fulfillment service rejected the merchant's fulfillment cancellation request.
- `CLOSED` — The fulfillment service closed the fulfillment order without completing it.
