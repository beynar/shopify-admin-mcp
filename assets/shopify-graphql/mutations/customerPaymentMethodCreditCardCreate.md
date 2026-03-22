# Mutation: `customerPaymentMethodCreditCardCreate`

**Returns:** `CustomerPaymentMethodCreditCardCreatePayload`

Creates a credit card payment method for a customer using a session id.
These values are only obtained through card imports happening from a PCI compliant environment.
Please use customerPaymentMethodRemoteCreate if you are not managing credit cards directly.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer.
- **`billingAddress`**: `MailingAddressInput!` — The billing address.
- **`sessionId`**: `String!` — The Cardserver session ID. Obtained by storing card data with Shopify's Cardsink. Exchanging raw card data for a session ID must be done in a PCI complaint environment.

## Payload Fields

- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method.
- `processing`: `Boolean` — If the card verification result is processing. When this is true, customer_payment_method will be null.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethod](../types/objects/CustomerPaymentMethod.md)
- [CustomerPaymentMethodCreditCardCreatePayload](../types/objects/CustomerPaymentMethodCreditCardCreatePayload.md)
- [MailingAddressInput](../types/inputs/MailingAddressInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodCreditCardCreate($customerId: ID!, $billingAddress: MailingAddressInput!, $sessionId: String!) {
  customerPaymentMethodCreditCardCreate(customerId: $customerId, billingAddress: $billingAddress, sessionId: $sessionId) {
    customerPaymentMethod {
      id
    }
    processing
    userErrors {
      field
      message
    }
  }
}
```
