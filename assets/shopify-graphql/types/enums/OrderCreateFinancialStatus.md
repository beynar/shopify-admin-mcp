# Enum: `OrderCreateFinancialStatus`

The status of payments associated with the order. Can only be set when the order is created.

## Values

- `PENDING` — The payments are pending. Payment might fail in this state. Check again to confirm whether the payments have been paid successfully.
- `AUTHORIZED` — The payments have been authorized.
- `PARTIALLY_PAID` — The order has been partially paid.
- `PAID` — The payments have been paid.
- `PARTIALLY_REFUNDED` — The payments have been partially refunded.
- `REFUNDED` — The payments have been refunded.
- `VOIDED` — The payments have been voided.
- `EXPIRED` — The payments have been expired.
