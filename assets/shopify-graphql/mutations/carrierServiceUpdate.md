# Mutation: `carrierServiceUpdate`

**Returns:** `CarrierServiceUpdatePayload`

Updates a carrier service. Only the app that creates a carrier service can update it.

## Arguments

- **`input`**: `DeliveryCarrierServiceUpdateInput!` — The input fields used to update a carrier service.

## Payload Fields

- `carrierService`: `DeliveryCarrierService` — The updated carrier service.
- `userErrors`: `[CarrierServiceUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CarrierServiceUpdatePayload](../types/objects/CarrierServiceUpdatePayload.md)
- [CarrierServiceUpdateUserError](../types/objects/CarrierServiceUpdateUserError.md)
- [DeliveryCarrierService](../types/objects/DeliveryCarrierService.md)
- [DeliveryCarrierServiceUpdateInput](../types/inputs/DeliveryCarrierServiceUpdateInput.md)

## Example Mutation

```graphql
mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
  carrierServiceUpdate(input: $input) {
    carrierService {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
