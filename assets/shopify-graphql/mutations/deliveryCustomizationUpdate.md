# Mutation: `deliveryCustomizationUpdate`

**Returns:** `DeliveryCustomizationUpdatePayload`

Updates a delivery customization.

## Arguments

- **`id`**: `ID!` — The global ID of the delivery customization.
- **`deliveryCustomization`**: `DeliveryCustomizationInput!` — The input data used to update the delivery customization.

## Payload Fields

- `deliveryCustomization`: `DeliveryCustomization` — Returns the updated delivery customization.
- `userErrors`: `[DeliveryCustomizationError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryCustomization](../types/objects/DeliveryCustomization.md)
- [DeliveryCustomizationError](../types/objects/DeliveryCustomizationError.md)
- [DeliveryCustomizationInput](../types/inputs/DeliveryCustomizationInput.md)
- [DeliveryCustomizationUpdatePayload](../types/objects/DeliveryCustomizationUpdatePayload.md)

## Example Mutation

```graphql
mutation DeliveryCustomizationUpdate($id: ID!, $deliveryCustomization: DeliveryCustomizationInput!) {
  deliveryCustomizationUpdate(id: $id, deliveryCustomization: $deliveryCustomization) {
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
