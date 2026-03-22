# Mutation: `customerPaymentMethodGetDuplicationData`

**Returns:** `CustomerPaymentMethodGetDuplicationDataPayload`

Returns encrypted data that can be used to duplicate the payment method in another shop within the same organization.

Currently, this only supports Shop Pay payment methods. This is only available for selected partner apps.

## Arguments

- **`customerPaymentMethodId`**: `ID!` — The payment method to be duplicated.
- **`targetShopId`**: `ID!` — The shop the payment method will be duplicated into.
- **`targetCustomerId`**: `ID!` — The customer the payment method will be duplicated into.

## Payload Fields

- `encryptedDuplicationData`: `String` — The encrypted data from the payment method to be duplicated.
- `userErrors`: `[CustomerPaymentMethodGetDuplicationDataUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethodGetDuplicationDataPayload](../types/objects/CustomerPaymentMethodGetDuplicationDataPayload.md)
- [CustomerPaymentMethodGetDuplicationDataUserError](../types/objects/CustomerPaymentMethodGetDuplicationDataUserError.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodGetDuplicationData($customerPaymentMethodId: ID!, $targetShopId: ID!, $targetCustomerId: ID!) {
  customerPaymentMethodGetDuplicationData(customerPaymentMethodId: $customerPaymentMethodId, targetShopId: $targetShopId, targetCustomerId: $targetCustomerId) {
    encryptedDuplicationData
    userErrors {
      field
      message
    }
  }
}
```
