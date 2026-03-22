# Mutation: `customerPaymentMethodPaypalBillingAgreementCreate`

**Returns:** `CustomerPaymentMethodPaypalBillingAgreementCreatePayload`

Creates a PayPal billing agreement for a customer.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer.
- **`billingAddress`**: `MailingAddressInput` — The billing address.
- **`billingAgreementId`**: `String!` — The billing agreement ID from PayPal that starts with 'B-' (for example, `B-1234XXXXX`).
- **`inactive`**: `Boolean` = `false` — Whether the PayPal billing agreement is inactive.

## Payload Fields

- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method.
- `userErrors`: `[CustomerPaymentMethodUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethod](../types/objects/CustomerPaymentMethod.md)
- [CustomerPaymentMethodPaypalBillingAgreementCreatePayload](../types/objects/CustomerPaymentMethodPaypalBillingAgreementCreatePayload.md)
- [CustomerPaymentMethodUserError](../types/objects/CustomerPaymentMethodUserError.md)
- [MailingAddressInput](../types/inputs/MailingAddressInput.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodPaypalBillingAgreementCreate($customerId: ID!, $billingAddress: MailingAddressInput, $billingAgreementId: String!, $inactive: Boolean) {
  customerPaymentMethodPaypalBillingAgreementCreate(customerId: $customerId, billingAddress: $billingAddress, billingAgreementId: $billingAgreementId, inactive: $inactive) {
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
