# Query: `orderPaymentStatus`

**Returns:** `OrderPaymentStatus`

Retrieves the status of a deferred payment by its payment reference ID. Use this query to monitor the processing status of payments that are initiated through payment mutations. Deferred payments are called [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms) in the API.

The query returns an [`OrderPaymentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus) object that includes the current payment status, any error messages, and associated transactions. Poll this query to track [asynchronous payment processing](https://shopify.dev/docs/apps/build/payments/processing) after initiating a deferred payment.

## Arguments

- **`paymentReferenceId`**: `String!` — Unique identifier returned by orderCreatePayment.
- **`orderId`**: `ID!` — ID of the order for which the payment was initiated.

## Return Type Fields

- `errorMessage`: `String` — A message describing an error during the asynchronous processing of a payment.
- `paymentReferenceId`: `String!` — The ID of the payment, initially returned by an `orderCreateMandatePayment` or `orderCreatePayment` mutation.
- `status`: `OrderPaymentStatusResult!` — The status of the payment.
- `transactions`: `[OrderTransaction!]!` — The transaction associated with the payment.
- `translatedErrorMessage`: `String` — A translated message describing an error during the asynchronous processing of a payment.

## Related Types

- [OrderPaymentStatus](../types/objects/OrderPaymentStatus.md)
- [OrderPaymentStatusResult](../types/enums/OrderPaymentStatusResult.md)
- [OrderTransaction](../types/objects/OrderTransaction.md)

## Example Query

```graphql
query OrderPaymentStatus($paymentReferenceId: String!, $orderId: ID!) {
  orderPaymentStatus(paymentReferenceId: $paymentReferenceId, orderId: $orderId) {
    errorMessage
    paymentReferenceId
    translatedErrorMessage
  }
}
```
