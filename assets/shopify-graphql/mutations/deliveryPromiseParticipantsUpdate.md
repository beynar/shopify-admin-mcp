# Mutation: `deliveryPromiseParticipantsUpdate`

**Returns:** `DeliveryPromiseParticipantsUpdatePayload`

Updates the delivery promise participants by adding or removing owners based on a branded promise handle.

## Arguments

- **`brandedPromiseHandle`**: `String!` — The branded promise handle to update the delivery promise participants for.
- **`ownersToAdd`**: `[ID!]` = `[]` — The owners to add to the delivery promise participants.
- **`ownersToRemove`**: `[ID!]` = `[]` — The owners to remove from the delivery promise participants.

## Payload Fields

- `promiseParticipants`: `[DeliveryPromiseParticipant!]` — The promise participants that were added.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryPromiseParticipant](../types/objects/DeliveryPromiseParticipant.md)
- [DeliveryPromiseParticipantsUpdatePayload](../types/objects/DeliveryPromiseParticipantsUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DeliveryPromiseParticipantsUpdate($brandedPromiseHandle: String!, $ownersToAdd: [ID!], $ownersToRemove: [ID!]) {
  deliveryPromiseParticipantsUpdate(brandedPromiseHandle: $brandedPromiseHandle, ownersToAdd: $ownersToAdd, ownersToRemove: $ownersToRemove) {
    promiseParticipants {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
