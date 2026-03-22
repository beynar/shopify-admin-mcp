# Input Object: `InventoryShipmentReceiveItemInput`

The input fields to receive an item on an inventory shipment.

## Input Fields

- `shipmentLineItemId`: `ID!` — The shipment line item ID to be received.
- `quantity`: `Int!` — The quantity for the item to be received.
- `reason`: `InventoryShipmentReceiveLineItemReason!` — The reason for received item.

## Related Types

- [InventoryShipmentReceiveLineItemReason](../../types/enums/InventoryShipmentReceiveLineItemReason.md)
