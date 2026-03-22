# Mutation: `deliveryShippingOriginAssign`

**Returns:** `DeliveryShippingOriginAssignPayload`

Assigns a location as the shipping origin while using legacy compatibility mode for multi-location delivery profiles.
Deprecated as of 2026-04 and will be removed in a future version as single origin shipping mode has been retired.

## Arguments

- **`locationId`**: `ID!` — The ID of the location to assign as the shipping origin.

## Payload Fields

- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryShippingOriginAssignPayload](../types/objects/DeliveryShippingOriginAssignPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DeliveryShippingOriginAssign($locationId: ID!) {
  deliveryShippingOriginAssign(locationId: $locationId) {
    userErrors {
      field
      message
    }
  }
}
```
