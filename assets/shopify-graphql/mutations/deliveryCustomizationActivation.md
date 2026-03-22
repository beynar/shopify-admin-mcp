# Mutation: `deliveryCustomizationActivation`

**Returns:** `DeliveryCustomizationActivationPayload`

Activates and deactivates delivery customizations.

## Arguments

- **`ids`**: `[ID!]!` — The global IDs of the delivery customizations.
- **`enabled`**: `Boolean!` — The enabled status of the delivery customizations.

## Payload Fields

- `ids`: `[String!]` — The IDs of the updated delivery customizations.
- `userErrors`: `[DeliveryCustomizationError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryCustomizationActivationPayload](../types/objects/DeliveryCustomizationActivationPayload.md)
- [DeliveryCustomizationError](../types/objects/DeliveryCustomizationError.md)

## Example Mutation

```graphql
mutation DeliveryCustomizationActivation($ids: [ID!]!, $enabled: Boolean!) {
  deliveryCustomizationActivation(ids: $ids, enabled: $enabled) {
    ids
    userErrors {
      field
      message
    }
  }
}
```
