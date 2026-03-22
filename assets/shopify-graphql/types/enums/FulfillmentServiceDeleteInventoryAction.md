# Enum: `FulfillmentServiceDeleteInventoryAction`

Actions that can be taken at the location when a client requests the deletion of the fulfillment service.

## Values

- `DELETE` — Deactivate and delete the inventory and location.
- `KEEP` — Keep the inventory in place and convert the Fulfillment Service's location to be merchant managed.
- `TRANSFER` — Transfer the inventory and other dependencies to the provided location.
