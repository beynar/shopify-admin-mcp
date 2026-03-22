# Mutation: `locationDeactivate`

**Returns:** `LocationDeactivatePayload`

Deactivates a location and moves inventory, pending orders, and moving transfers " "to a destination location.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`locationId`**: `ID!` — The ID of a location to deactivate.
- **`destinationLocationId`**: `ID` — The ID of a destination location to which inventory, pending orders and moving transfers will be moved from the location to deactivate.

## Payload Fields

- `location`: `Location` — The location that was deactivated.
- `locationDeactivateUserErrors`: `[LocationDeactivateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Location](../types/objects/Location.md)
- [LocationDeactivatePayload](../types/objects/LocationDeactivatePayload.md)
- [LocationDeactivateUserError](../types/objects/LocationDeactivateUserError.md)

## Example Mutation

```graphql
mutation LocationDeactivate($locationId: ID!, $destinationLocationId: ID) {
  locationDeactivate(locationId: $locationId, destinationLocationId: $destinationLocationId) {
    location {
      id
    }
    locationDeactivateUserErrors {
      id
    }
  }
}
```
