# Input Object: `InventoryShipmentCreateInput`

The input fields to add a shipment.

## Input Fields

- `movementId`: `ID!` — The ID of the inventory movement (transfer or purchase order) this shipment belongs to.
- `trackingInput`: `InventoryShipmentTrackingInput` — The tracking information for the shipment.
- `lineItems`: `[InventoryShipmentLineItemInput!]!` — The list of line items for the inventory shipment.
- `dateCreated`: `DateTime` — The date the shipment was created.

## Related Types

- [InventoryShipmentLineItemInput](../../types/inputs/InventoryShipmentLineItemInput.md)
- [InventoryShipmentTrackingInput](../../types/inputs/InventoryShipmentTrackingInput.md)
