# Mutation: `deliveryCustomizationDelete`

**Returns:** `DeliveryCustomizationDeletePayload`

Creates a delivery customization.

## Arguments

- **`id`**: `ID!` — The global ID of the delivery customization.

## Payload Fields

- `deletedId`: `ID` — Returns the deleted delivery customization ID.
- `userErrors`: `[DeliveryCustomizationError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryCustomizationDeletePayload](../types/objects/DeliveryCustomizationDeletePayload.md)
- [DeliveryCustomizationError](../types/objects/DeliveryCustomizationError.md)

## Example Mutation

```graphql
mutation DeliveryCustomizationDelete($id: ID!) {
  deliveryCustomizationDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
