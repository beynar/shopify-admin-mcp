# Mutation: `paymentReminderSend`

**Returns:** `PaymentReminderSendPayload`

Sends an email payment reminder for a payment schedule.

## Arguments

- **`paymentScheduleId`**: `ID!` — The payment schedule id associated with the reminder.

## Payload Fields

- `success`: `Boolean` — Whether the payment reminder email was successfully sent.
- `userErrors`: `[PaymentReminderSendUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PaymentReminderSendPayload](../types/objects/PaymentReminderSendPayload.md)
- [PaymentReminderSendUserError](../types/objects/PaymentReminderSendUserError.md)

## Example Mutation

```graphql
mutation PaymentReminderSend($paymentScheduleId: ID!) {
  paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
    success
    userErrors {
      field
      message
    }
  }
}
```
