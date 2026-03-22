# Object: `OrderPaymentStatus`

The status of a customer's payment for an order.

## Fields

- `errorMessage`: `String` — A message describing an error during the asynchronous processing of a payment.
- `paymentReferenceId`: `String!` — The ID of the payment, initially returned by an `orderCreateMandatePayment` or `orderCreatePayment` mutation.
- `status`: `OrderPaymentStatusResult!` — The status of the payment.
- `transactions`: `[OrderTransaction!]!` — The transaction associated with the payment.
- `translatedErrorMessage`: `String` — A translated message describing an error during the asynchronous processing of a payment.

## Related Types

- [OrderPaymentStatusResult](../../types/enums/OrderPaymentStatusResult.md)
- [OrderTransaction](../../types/objects/OrderTransaction.md)
