# Mutation: `customerPaymentMethodGetUpdateUrl`

**Returns:** `CustomerPaymentMethodGetUpdateUrlPayload`

Returns a URL that allows the customer to update a specific payment method.

Currently, `customerPaymentMethodGetUpdateUrl` only supports Shop Pay.

## Arguments

- **`customerPaymentMethodId`**: `ID!` — The payment method to be updated.

## Payload Fields

- `updatePaymentMethodUrl`: `URL` — The URL to redirect the customer to update the payment method.
- `userErrors`: `[CustomerPaymentMethodGetUpdateUrlUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethodGetUpdateUrlPayload](../types/objects/CustomerPaymentMethodGetUpdateUrlPayload.md)
- [CustomerPaymentMethodGetUpdateUrlUserError](../types/objects/CustomerPaymentMethodGetUpdateUrlUserError.md)

## Example Mutation

```graphql
mutation CustomerPaymentMethodGetUpdateUrl($customerPaymentMethodId: ID!) {
  customerPaymentMethodGetUpdateUrl(customerPaymentMethodId: $customerPaymentMethodId) {
    updatePaymentMethodUrl
    userErrors {
      field
      message
    }
  }
}
```
