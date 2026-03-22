# Enum: `OrderCreateManualPaymentOrderCreateManualPaymentErrorCode`

Possible error codes that can be returned by `OrderCreateManualPaymentOrderCreateManualPaymentError`.

## Values

- `ORDER_NOT_FOUND` — Order is not found.
- `AMOUNT_NOT_POSITIVE` — Amount must be positive.
- `GATEWAY_NOT_FOUND` — Payment gateway is not found.
- `AMOUNT_EXCEEDS_BALANCE` — Amount exceeds the remaining balance.
- `ORDER_IS_TEMPORARILY_UNAVAILABLE` — Order is temporarily unavailable.
- `PROCESSED_AT_INVALID` — Indicates that the processedAt field is invalid, such as when it references a future date.
