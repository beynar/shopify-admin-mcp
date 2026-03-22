# Mutation: `paymentCustomizationCreate`

**Returns:** `PaymentCustomizationCreatePayload`

Creates a payment customization.

## Arguments

- **`paymentCustomization`**: `PaymentCustomizationInput!` — The input data used to create the payment customization.

## Payload Fields

- `paymentCustomization`: `PaymentCustomization` — Returns the created payment customization.
- `userErrors`: `[PaymentCustomizationError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PaymentCustomization](../types/objects/PaymentCustomization.md)
- [PaymentCustomizationCreatePayload](../types/objects/PaymentCustomizationCreatePayload.md)
- [PaymentCustomizationError](../types/objects/PaymentCustomizationError.md)
- [PaymentCustomizationInput](../types/inputs/PaymentCustomizationInput.md)

## Example Mutation

```graphql
mutation PaymentCustomizationCreate($paymentCustomization: PaymentCustomizationInput!) {
  paymentCustomizationCreate(paymentCustomization: $paymentCustomization) {
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
