# Mutation: `deliveryProfileRemove`

**Returns:** `DeliveryProfileRemovePayload`

Enqueue the removal of a delivery profile.

## Arguments

- **`id`**: `ID!` — The ID of the delivery profile to remove.

## Payload Fields

- `job`: `Job` — The delivery profile deletion job triggered by the mutation.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryProfileRemovePayload](../types/objects/DeliveryProfileRemovePayload.md)
- [Job](../types/objects/Job.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DeliveryProfileRemove($id: ID!) {
  deliveryProfileRemove(id: $id) {
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
