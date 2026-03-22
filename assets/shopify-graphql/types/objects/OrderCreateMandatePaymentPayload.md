# Object: `OrderCreateMandatePaymentPayload`

Return type for `orderCreateMandatePayment` mutation.

## Fields

- `job`: `Job` — The async job used for charging the payment.
- `paymentReferenceId`: `String` — The Unique ID for the created payment.
- `userErrors`: `[OrderCreateMandatePaymentUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../../types/objects/Job.md)
- [OrderCreateMandatePaymentUserError](../../types/objects/OrderCreateMandatePaymentUserError.md)
