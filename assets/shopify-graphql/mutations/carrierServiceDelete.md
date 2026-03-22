# Mutation: `carrierServiceDelete`

**Returns:** `CarrierServiceDeletePayload`

Removes an existing carrier service.

## Arguments

- **`id`**: `ID!` — The global ID of the carrier service to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted carrier service.
- `userErrors`: `[CarrierServiceDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CarrierServiceDeletePayload](../types/objects/CarrierServiceDeletePayload.md)
- [CarrierServiceDeleteUserError](../types/objects/CarrierServiceDeleteUserError.md)

## Example Mutation

```graphql
mutation CarrierServiceDelete($id: ID!) {
  carrierServiceDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
