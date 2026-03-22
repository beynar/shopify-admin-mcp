# Mutation: `inventoryShipmentAddItems`

**Returns:** `InventoryShipmentAddItemsPayload`

Adds items to an inventory shipment.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`id`**: `ID!` — The ID of the inventory shipment to modify.
- **`lineItems`**: `[InventoryShipmentLineItemInput!]!` — The list of line items to add to the inventory shipment.

## Payload Fields

- `addedItems`: `[InventoryShipmentLineItem!]` — The list of added line items.
- `inventoryShipment`: `InventoryShipment` — The inventory shipment with the added items.
- `userErrors`: `[InventoryShipmentAddItemsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentAddItemsPayload](../types/objects/InventoryShipmentAddItemsPayload.md)
- [InventoryShipmentAddItemsUserError](../types/objects/InventoryShipmentAddItemsUserError.md)
- [InventoryShipmentLineItem](../types/objects/InventoryShipmentLineItem.md)
- [InventoryShipmentLineItemInput](../types/inputs/InventoryShipmentLineItemInput.md)

## Example Mutation

```graphql
mutation InventoryShipmentAddItems($id: ID!, $lineItems: [InventoryShipmentLineItemInput!]!) {
  inventoryShipmentAddItems(id: $id, lineItems: $lineItems) {
    addedItems {
      id
    }
    inventoryShipment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
