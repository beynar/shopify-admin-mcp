# Inventory: Inventory management, locations, stock levels

## Queries (13)

- **[inventoryItem](../queries/inventoryItem.md)** → `InventoryItem` `(id)`
  Returns an
- **[inventoryItems](../queries/inventoryItems.md)** → `InventoryItemConnection!` `(first, after, last, before, reverse, query)`
  Returns a list of inventory items.
- **[inventoryLevel](../queries/inventoryLevel.md)** → `InventoryLevel` `(id)`
  Returns an
- **[inventoryProperties](../queries/inventoryProperties.md)** → `InventoryProperties!`
  Returns the shop's inventory configuration, including all inventory quantity names. Quantity names represent different [inventory states](https://shop
- **[inventoryShipment](../queries/inventoryShipment.md)** → `InventoryShipment` `(id)`
  Retrieves an [`InventoryShipment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment) by ID. Returns tracking details, [`Inv
- **[inventoryTransfer](../queries/inventoryTransfer.md)** → `InventoryTransfer` `(id)`
  Returns an [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer) by ID. Inventory transfers track the mov
- **[inventoryTransfers](../queries/inventoryTransfers.md)** → `InventoryTransferConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Returns a paginated list of [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer) objects between locatio
- **[location](../queries/location.md)** → `Location` `(id)`
  Retrieves a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by its ID. Locations are physical places where merchants 
- **[locationByIdentifier](../queries/locationByIdentifier.md)** → `Location` `(identifier)`
  Return a location by an identifier.
- **[locations](../queries/locations.md)** → `LocationConnection!` `(first, after, last, before, reverse, sortKey, query, includeLegacy, includeInactive)`
  A paginated list of inventory locations where merchants can stock [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) items
- **[locationsAvailableForDeliveryProfiles](../queries/locationsAvailableForDeliveryProfiles.md)** → `[Location!]`
  Returns a list of all origin locations available for a delivery profile.
- **[locationsAvailableForDeliveryProfilesConnection](../queries/locationsAvailableForDeliveryProfilesConnection.md)** → `LocationConnection!` `(first, after, last, before, reverse)`
  Returns a list of all origin locations available for a delivery profile.
- **[locationsCount](../queries/locationsCount.md)** → `Count` `(query, limit)`
  Returns the count of locations for the given shop. Limited to a maximum of 10000 by default.

## Mutations (34)

- **[inventoryActivate](../mutations/inventoryActivate.md)** → `InventoryActivatePayload` `(inventoryItemId, locationId, available, onHand, stockAtLegacyLocation)`
  Activates an inventory item at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by creating an [`InventoryLevel`](ht
- **[inventoryAdjustQuantities](../mutations/inventoryAdjustQuantities.md)** → `InventoryAdjustQuantitiesPayload` `(input)`
  Adjusts quantities for inventory items by applying incremental changes at specific locations. Each adjustment modifies the quantity by a delta value r
- **[inventoryBulkToggleActivation](../mutations/inventoryBulkToggleActivation.md)** → `InventoryBulkToggleActivationPayload` `(inventoryItemId, inventoryItemUpdates)`
  Activates or deactivates an inventory item at multiple locations. When you activate an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/la
- **[inventoryDeactivate](../mutations/inventoryDeactivate.md)** → `InventoryDeactivatePayload` `(inventoryLevelId)`
  Removes an inventory item's quantities from a location, and turns off inventory at the location.
- **[inventoryItemUpdate](../mutations/inventoryItemUpdate.md)** → `InventoryItemUpdatePayload` `(id, input)`
  Updates an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)'s properties including whether inventory is trac
- **[inventoryMoveQuantities](../mutations/inventoryMoveQuantities.md)** → `InventoryMoveQuantitiesPayload` `(input)`
  Moves inventory quantities for a single inventory item between different states at a single location. Use this mutation to reallocate inventory across
- **[inventorySetOnHandQuantities](../mutations/inventorySetOnHandQuantities.md)** → `InventorySetOnHandQuantitiesPayload` `(input)`
  Sets an inventory item's on-hand quantities to specific absolute values at designated locations. The mutation takes a reason for tracking purposes and
- **[inventorySetQuantities](../mutations/inventorySetQuantities.md)** → `InventorySetQuantitiesPayload` `(input)`
  Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle
- **[inventorySetScheduledChanges](../mutations/inventorySetScheduledChanges.md)** → `InventorySetScheduledChangesPayload` `(input)`
  Set up scheduled changes of inventory items.
- **[inventoryShipmentAddItems](../mutations/inventoryShipmentAddItems.md)** → `InventoryShipmentAddItemsPayload` `(id, lineItems)`
  Adds items to an inventory shipment.
- **[inventoryShipmentCreate](../mutations/inventoryShipmentCreate.md)** → `InventoryShipmentCreatePayload` `(input)`
  Adds a draft shipment to an inventory transfer.
- **[inventoryShipmentCreateInTransit](../mutations/inventoryShipmentCreateInTransit.md)** → `InventoryShipmentCreateInTransitPayload` `(input)`
  Adds an in-transit shipment to an inventory transfer.
- **[inventoryShipmentDelete](../mutations/inventoryShipmentDelete.md)** → `InventoryShipmentDeletePayload` `(id)`
  Deletes an inventory shipment. Only draft shipments can be deleted.
- **[inventoryShipmentMarkInTransit](../mutations/inventoryShipmentMarkInTransit.md)** → `InventoryShipmentMarkInTransitPayload` `(id, dateShipped)`
  Marks a draft inventory shipment as in transit.
- **[inventoryShipmentReceive](../mutations/inventoryShipmentReceive.md)** → `InventoryShipmentReceivePayload` `(id, lineItems, dateReceived, bulkReceiveAction)`
  Receive an inventory shipment.
- **[inventoryShipmentRemoveItems](../mutations/inventoryShipmentRemoveItems.md)** → `InventoryShipmentRemoveItemsPayload` `(id, lineItems)`
  Remove items from an inventory shipment.
- **[inventoryShipmentSetTracking](../mutations/inventoryShipmentSetTracking.md)** → `InventoryShipmentSetTrackingPayload` `(id, tracking)`
  Edits the tracking info on an inventory shipment.
- **[inventoryShipmentUpdateItemQuantities](../mutations/inventoryShipmentUpdateItemQuantities.md)** → `InventoryShipmentUpdateItemQuantitiesPayload` `(id, items)`
  Updates items on an inventory shipment.
- **[inventoryTransferCancel](../mutations/inventoryTransferCancel.md)** → `InventoryTransferCancelPayload` `(id)`
  Cancels an inventory transfer.
- **[inventoryTransferCreate](../mutations/inventoryTransferCreate.md)** → `InventoryTransferCreatePayload` `(input)`
  Creates a draft inventory transfer to move inventory items between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) ob
- **[inventoryTransferCreateAsReadyToShip](../mutations/inventoryTransferCreateAsReadyToShip.md)** → `InventoryTransferCreateAsReadyToShipPayload` `(input)`
  Creates an inventory transfer in ready to ship.
- **[inventoryTransferDelete](../mutations/inventoryTransferDelete.md)** → `InventoryTransferDeletePayload` `(id)`
  Deletes an inventory transfer.
- **[inventoryTransferDuplicate](../mutations/inventoryTransferDuplicate.md)** → `InventoryTransferDuplicatePayload` `(id)`
  This mutation allows duplicating an existing inventory transfer. The duplicated transfer will have the same
- **[inventoryTransferEdit](../mutations/inventoryTransferEdit.md)** → `InventoryTransferEditPayload` `(id, input)`
  Edits an inventory transfer.
- **[inventoryTransferMarkAsReadyToShip](../mutations/inventoryTransferMarkAsReadyToShip.md)** → `InventoryTransferMarkAsReadyToShipPayload` `(id)`
  Sets an inventory transfer to ready to ship.
- **[inventoryTransferRemoveItems](../mutations/inventoryTransferRemoveItems.md)** → `InventoryTransferRemoveItemsPayload` `(input)`
  This mutation allows removing the shippable quantities of line items on a Transfer.
- **[inventoryTransferSetItems](../mutations/inventoryTransferSetItems.md)** → `InventoryTransferSetItemsPayload` `(input)`
  This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.
- **[locationActivate](../mutations/locationActivate.md)** → `LocationActivatePayload` `(locationId)`
  Activates a location so that you can stock inventory at the location. Refer to the
- **[locationAdd](../mutations/locationAdd.md)** → `LocationAddPayload` `(input)`
  Adds a new [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where you can stock inventory and fulfill orders. Location
- **[locationDeactivate](../mutations/locationDeactivate.md)** → `LocationDeactivatePayload` `(locationId, destinationLocationId)`
  Deactivates a location and moves inventory, pending orders, and moving transfers " "to a destination location.
- **[locationDelete](../mutations/locationDelete.md)** → `LocationDeletePayload` `(locationId)`
  Deletes a location.
- **[locationEdit](../mutations/locationEdit.md)** → `LocationEditPayload` `(id, input)`
  Updates the properties of an existing [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location). You can modify the location's 
- **[locationLocalPickupDisable](../mutations/locationLocalPickupDisable.md)** → `LocationLocalPickupDisablePayload` `(locationId)`
  Disables local pickup for a location.
- **[locationLocalPickupEnable](../mutations/locationLocalPickupEnable.md)** → `LocationLocalPickupEnablePayload` `(localPickupSettings)`
  Enables local pickup for a location so customers can collect their orders in person. Configures the estimated pickup time that customers see at checko
