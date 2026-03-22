# Mutation: `orderCreateMandatePayment`

**Returns:** `OrderCreateMandatePaymentPayload`

Creates a payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) using a stored [`PaymentMandate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate). A payment mandate represents the customer's authorization to charge their payment method for deferred payments, such as pre-orders or try-before-you-buy purchases.

The mutation processes the payment asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) for tracking the payment status. You can specify the payment amount to collect, and use the [`autoCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-autoCapture) argument to either immediately capture the payment or only authorize it for later capture. Each payment request requires a unique [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-idempotencyKey) to prevent duplicate charges. Subsequent calls with the same key return the original payment result rather than creating a new payment.

Learn more about [deferred payments and payment mandates](https://shopify.dev/docs/apps/build/purchase-options/deferred#charging-the-remaining-balance) and [idempotent requests](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`id`**: `ID!` — The ID of the order to collect the balance for.
- **`paymentScheduleId`**: `ID` — The ID of the payment schedule to collect the balance for.
- **`idempotencyKey`**: `String!` — A unique key to identify the payment request.
- **`mandateId`**: `ID!` — The mandate ID used for payment.
- **`amount`**: `MoneyInput` — The payment amount to collect.
- **`autoCapture`**: `Boolean` = `true` — Whether the payment should be authorized or captured. If `false`, then the authorization of             the payment is triggered.

## Payload Fields

- `job`: `Job` — The async job used for charging the payment.
- `paymentReferenceId`: `String` — The Unique ID for the created payment.
- `userErrors`: `[OrderCreateMandatePaymentUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [MoneyInput](../types/inputs/MoneyInput.md)
- [OrderCreateMandatePaymentPayload](../types/objects/OrderCreateMandatePaymentPayload.md)
- [OrderCreateMandatePaymentUserError](../types/objects/OrderCreateMandatePaymentUserError.md)

## Example Mutation

```graphql
mutation OrderCreateMandatePayment($id: ID!, $paymentScheduleId: ID, $idempotencyKey: String!, $mandateId: ID!, $amount: MoneyInput, $autoCapture: Boolean) {
  orderCreateMandatePayment(id: $id, paymentScheduleId: $paymentScheduleId, idempotencyKey: $idempotencyKey, mandateId: $mandateId, amount: $amount, autoCapture: $autoCapture) {
    job {
      id
    }
    paymentReferenceId
    userErrors {
      field
      message
    }
  }
}
```
