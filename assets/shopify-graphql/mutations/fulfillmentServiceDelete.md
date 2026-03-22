# Mutation: `fulfillmentServiceDelete`

**Returns:** `FulfillmentServiceDeletePayload`

Deletes a fulfillment service.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment service to delete.
- **`destinationLocationId`**: `ID` — The ID of an active merchant managed location where inventory and commitments will be relocated after the fulfillment service is deleted.  Inventory will only be transferred if the [`TRANSFER`](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction#value-transfer) inventory action has been chosen.
- **`inventoryAction`**: `FulfillmentServiceDeleteInventoryAction` = `TRANSFER` — The action to take with the location after the fulfillment service is deleted.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted fulfillment service.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentServiceDeleteInventoryAction](../types/enums/FulfillmentServiceDeleteInventoryAction.md)
- [FulfillmentServiceDeletePayload](../types/objects/FulfillmentServiceDeletePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentServiceDelete($id: ID!, $destinationLocationId: ID, $inventoryAction: FulfillmentServiceDeleteInventoryAction) {
  fulfillmentServiceDelete(id: $id, destinationLocationId: $destinationLocationId, inventoryAction: $inventoryAction) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
