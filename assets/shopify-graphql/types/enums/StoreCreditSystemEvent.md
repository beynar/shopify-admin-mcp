# Enum: `StoreCreditSystemEvent`

The event that caused the store credit account transaction.

## Values

- `ADJUSTMENT` — An adjustment was made to the store credit account.
- `ORDER_PAYMENT` — Store credit was used as payment for an order.
- `ORDER_REFUND` — Store credit was refunded from an order.
- `PAYMENT_FAILURE` — A store credit payment was reverted due to another payment method failing.
- `PAYMENT_RETURNED` — A smaller amount of store credit was captured than was originally authorized.
- `ORDER_CANCELLATION` — Store credit was returned when an authorized payment was voided.
- `TAX_FINALIZATION` — Tax finalization affected the store credit payment.
