# Mutation: `locationDelete`

**Returns:** `LocationDeletePayload`

Deletes a location.

## Arguments

- **`locationId`**: `ID!` — The ID of a location to delete.

## Payload Fields

- `deletedLocationId`: `ID` — The ID of the location that was deleted.
- `locationDeleteUserErrors`: `[LocationDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [LocationDeletePayload](../types/objects/LocationDeletePayload.md)
- [LocationDeleteUserError](../types/objects/LocationDeleteUserError.md)

## Example Mutation

```graphql
mutation LocationDelete($locationId: ID!) {
  locationDelete(locationId: $locationId) {
    deletedLocationId
    locationDeleteUserErrors {
      id
    }
  }
}
```
