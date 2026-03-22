# Mutation: `customerPaymentMethodSendUpdateEmail`

**Returns:** `CustomerPaymentMethodSendUpdateEmailPayload`

Sends a link to the customer so they can update a specific payment method.

## Arguments

- **`customerPaymentMethodId`**: `ID!` — The payment method to be updated.
- **`email`**: `EmailInput` — Specifies the payment method update email fields. Only the 'from' and 'bcc' fields are accepted for input.

## Payload Fields

- `customer`: `Customer` — The customer to whom an update payment method email was sent.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerPaymentMethodSendUpdateEmailPayload](../types/objects/CustomerPaymentMethodSendUpdateEmailPayload.md)
- [EmailInput](../types/inputs/EmailInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodSendUpdateEmail($customerPaymentMethodId: ID!, $email: EmailInput) {
  customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId, email: $email) {
    customer {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
