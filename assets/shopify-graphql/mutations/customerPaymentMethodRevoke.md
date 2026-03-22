# Mutation: `customerPaymentMethodRevoke`

**Returns:** `CustomerPaymentMethodRevokePayload`

Revokes a customer's payment method.

## Arguments

- **`customerPaymentMethodId`**: `ID!` — The ID of the customer payment method to be revoked.

## Payload Fields

- `revokedCustomerPaymentMethodId`: `ID` — The ID of the revoked customer payment method.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethodRevokePayload](../types/objects/CustomerPaymentMethodRevokePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodRevoke($customerPaymentMethodId: ID!) {
  customerPaymentMethodRevoke(customerPaymentMethodId: $customerPaymentMethodId) {
    revokedCustomerPaymentMethodId
    userErrors {
      field
      message
    }
  }
}
```
