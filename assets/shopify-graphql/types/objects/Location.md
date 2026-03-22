# Object: `Location`

A physical location where merchants store and fulfill inventory. Locations include retail stores, warehouses, popups, dropshippers, or other places where inventory is managed or stocked.

Active locations can fulfill online orders when configured with shipping rates, local pickup, or local delivery options. Locations track inventory quantities for [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and process [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) fulfillment. Third-party apps using [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can create and manage their own locations.

**Implements:** `HasMetafieldDefinitions`, `HasMetafields`, `LegacyInteroperability`, `Node`

## Fields

- `activatable`: `Boolean!` — Whether the location can be reactivated. If `false`, then trying to activate the location with the
- `address`: `LocationAddress!` — The address of this location.
- `addressVerified`: `Boolean!` — Whether the location address has been verified.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was added to a shop.
- `deactivatable`: `Boolean!` — Whether this location can be deactivated. If `true`, then the location can be deactivated by calling the
- `deactivatedAt`: `String` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was deactivated at. For example, 3:30 pm on September 7, 2019 in the time zone of UTC (Universal Time Coordinated) is represented as `"2019-09-07T15:50:00Z`".
- `deletable`: `Boolean!` — Whether this location can be deleted.
- `fulfillmentService`: `FulfillmentService` — Name of the service provider that fulfills from this location.
- `fulfillsOnlineOrders`: `Boolean!` — Whether this location can fulfill online orders.
- `hasActiveInventory`: `Boolean!` — Whether this location has active inventory.
- `hasUnfulfilledOrders`: `Boolean!` — Whether this location has orders that need to be fulfilled.
- `id`: `ID!` — A globally-unique ID.
- `inventoryLevel` `(inventoryItemId)`: `InventoryLevel` — The quantities of an inventory item at this location.
- `inventoryLevels` `(first, after, last, before, reverse, query)`: `InventoryLevelConnection!` — A list of the quantities of the inventory items that can be stocked at this location.
- `isActive`: `Boolean!` — Whether the location is active. A deactivated location can be activated (change `isActive: true`) if it has
- `isFulfillmentService`: `Boolean!` — Whether this location is a fulfillment service.
- `isPrimary`: `Boolean!` *(deprecated)* — Whether the location is your primary location for shipping inventory.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `localPickupSettingsV2`: `DeliveryLocalPickupSettings` — Local pickup settings for the location.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the location.
- `shipsInventory`: `Boolean!` — Legacy field indicating this location was designated for shipping. All locations with valid addresses can now ship.
- `suggestedAddresses`: `[LocationSuggestedAddress!]!` — List of suggested addresses for this location (empty if none).
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the location was last updated.

## Related Types

- [DeliveryLocalPickupSettings](../../types/objects/DeliveryLocalPickupSettings.md)
- [FulfillmentService](../../types/objects/FulfillmentService.md)
- [InventoryLevel](../../types/objects/InventoryLevel.md)
- [LocationAddress](../../types/objects/LocationAddress.md)
- [LocationSuggestedAddress](../../types/objects/LocationSuggestedAddress.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
