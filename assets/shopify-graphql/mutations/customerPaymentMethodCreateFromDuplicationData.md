# Mutation: `customerPaymentMethodCreateFromDuplicationData`

**Returns:** `CustomerPaymentMethodCreateFromDuplicationDataPayload`

Creates a vaulted payment method for a customer from duplication data.

This data must be obtained from another shop within the same organization.

Currently, this only supports Shop Pay payment methods. This is only available for selected partner apps.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer.
- **`billingAddress`**: `MailingAddressInput!` — The billing address.
- **`encryptedDuplicationData`**: `String!` — The encrypted payment method data.

## Payload Fields

- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method.
- `userErrors`: `[CustomerPaymentMethodCreateFromDuplicationDataUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethod](../types/objects/CustomerPaymentMethod.md)
- [CustomerPaymentMethodCreateFromDuplicationDataPayload](../types/objects/CustomerPaymentMethodCreateFromDuplicationDataPayload.md)
- [CustomerPaymentMethodCreateFromDuplicationDataUserError](../types/objects/CustomerPaymentMethodCreateFromDuplicationDataUserError.md)
- [MailingAddressInput](../types/inputs/MailingAddressInput.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodCreateFromDuplicationData($customerId: ID!, $billingAddress: MailingAddressInput!, $encryptedDuplicationData: String!) {
  customerPaymentMethodCreateFromDuplicationData(customerId: $customerId, billingAddress: $billingAddress, encryptedDuplicationData: $encryptedDuplicationData) {
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
