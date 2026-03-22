# Mutation: `deliveryCustomizationCreate`

**Returns:** `DeliveryCustomizationCreatePayload`

Creates a delivery customization.

## Arguments

- **`deliveryCustomization`**: `DeliveryCustomizationInput!` — The input data used to create the delivery customization.

## Payload Fields

- `deliveryCustomization`: `DeliveryCustomization` — Returns the created delivery customization.
- `userErrors`: `[DeliveryCustomizationError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryCustomization](../types/objects/DeliveryCustomization.md)
- [DeliveryCustomizationCreatePayload](../types/objects/DeliveryCustomizationCreatePayload.md)
- [DeliveryCustomizationError](../types/objects/DeliveryCustomizationError.md)
- [DeliveryCustomizationInput](../types/inputs/DeliveryCustomizationInput.md)

## Example Mutation

```graphql
mutation DeliveryCustomizationCreate($deliveryCustomization: DeliveryCustomizationInput!) {
  deliveryCustomizationCreate(deliveryCustomization: $deliveryCustomization) {
    deliveryCustomization {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
