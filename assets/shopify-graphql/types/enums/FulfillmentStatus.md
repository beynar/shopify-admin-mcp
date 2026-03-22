# Enum: `FulfillmentStatus`

The status of a fulfillment.

## Values

- `PENDING` *(deprecated)* — Shopify has created the fulfillment and is waiting for the third-party fulfillment service to transition it to `open` or `success`.
- `OPEN` *(deprecated)* — The third-party fulfillment service has acknowledged the fulfillment and is processing it.
- `SUCCESS` — The fulfillment was completed successfully.
- `CANCELLED` — The fulfillment was canceled.
- `ERROR` — There was an error with the fulfillment request.
- `FAILURE` — The fulfillment request failed.
