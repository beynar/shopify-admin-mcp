# Mutation: `customerPaymentMethodPaypalBillingAgreementUpdate`

**Returns:** `CustomerPaymentMethodPaypalBillingAgreementUpdatePayload`

Updates a PayPal billing agreement for a customer.

## Arguments

- **`id`**: `ID!` — The ID of the customer payment method.
- **`billingAddress`**: `MailingAddressInput!` — The billing address.

## Payload Fields

- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method.
- `userErrors`: `[CustomerPaymentMethodUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethod](../types/objects/CustomerPaymentMethod.md)
- [CustomerPaymentMethodPaypalBillingAgreementUpdatePayload](../types/objects/CustomerPaymentMethodPaypalBillingAgreementUpdatePayload.md)
- [CustomerPaymentMethodUserError](../types/objects/CustomerPaymentMethodUserError.md)
- [MailingAddressInput](../types/inputs/MailingAddressInput.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodPaypalBillingAgreementUpdate($id: ID!, $billingAddress: MailingAddressInput!) {
  customerPaymentMethodPaypalBillingAgreementUpdate(id: $id, billingAddress: $billingAddress) {
    customerPaymentMethod {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
