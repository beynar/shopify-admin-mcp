# Mutation: `paymentCustomizationUpdate`

**Returns:** `PaymentCustomizationUpdatePayload`

Updates a payment customization.

## Arguments

- **`id`**: `ID!` — The global ID of the payment customization.
- **`paymentCustomization`**: `PaymentCustomizationInput!` — The input data used to update the payment customization.

## Payload Fields

- `paymentCustomization`: `PaymentCustomization` — Returns the updated payment customization.
- `userErrors`: `[PaymentCustomizationError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PaymentCustomization](../types/objects/PaymentCustomization.md)
- [PaymentCustomizationError](../types/objects/PaymentCustomizationError.md)
- [PaymentCustomizationInput](../types/inputs/PaymentCustomizationInput.md)
- [PaymentCustomizationUpdatePayload](../types/objects/PaymentCustomizationUpdatePayload.md)

## Example Mutation

```graphql
mutation PaymentCustomizationUpdate($id: ID!, $paymentCustomization: PaymentCustomizationInput!) {
  paymentCustomizationUpdate(id: $id, paymentCustomization: $paymentCustomization) {
    paymentCustomization {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
