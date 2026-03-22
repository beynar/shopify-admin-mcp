# Input Object: `OrderCaptureInput`

The input fields for the authorized transaction to capture and the total amount to capture from it.

## Input Fields

- `id`: `ID!` — The ID of the order to capture.
- `parentTransactionId`: `ID!` — The ID of the authorized transaction to capture.
- `amount`: `Money!` — The amount to capture. The capture amount can't be greater than the amount of the authorized transaction.
- `currency`: `CurrencyCode` — The currency (in ISO format) that's used to capture the order. This must be the presentment currency (the currency used by the customer) and is a required field for orders where the currency and presentment currency differ.
- `finalCapture`: `Boolean` — Indicates whether this is to be the final capture for the order transaction. Only applies to

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
