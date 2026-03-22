# Enum: `InventoryBulkToggleActivationUserErrorCode`

Possible error codes that can be returned by `InventoryBulkToggleActivationUserError`.

## Values

- `GENERIC_ERROR` — An error occurred while setting the activation status.
- `CANNOT_DEACTIVATE_FROM_ONLY_LOCATION` — Cannot unstock an inventory item from the only location at which it is stocked.
- `COMMITTED_AND_INCOMING_INVENTORY_AT_LOCATION` *(deprecated)* — Cannot unstock this inventory item from this location because it has committed and incoming quantities.
- `INCOMING_INVENTORY_AT_LOCATION` — Cannot unstock this inventory item from this location because it has incoming quantities.
- `COMMITTED_INVENTORY_AT_LOCATION` — Cannot unstock this inventory item from this location because it has committed quantities.
- `RESERVED_INVENTORY_AT_LOCATION` — Cannot unstock this inventory item from this location because it has unavailable quantities.
- `FAILED_TO_UNSTOCK_FROM_LOCATION` — Failed to unstock this inventory item from this location.
- `INVENTORY_MANAGED_BY_3RD_PARTY` — Cannot stock this inventory item at this location because it is managed by a third-party fulfillment service.
- `INVENTORY_MANAGED_BY_SHOPIFY` — Cannot stock this inventory item at this location because it is managed by Shopify.
- `FAILED_TO_STOCK_AT_LOCATION` — Failed to stock this inventory item at this location.
- `MISSING_SKU` — Cannot stock this inventory item at this location because the variant is missing a SKU.
- `LOCATION_NOT_FOUND` — The location was not found.
- `INVENTORY_ITEM_NOT_FOUND` — The inventory item was not found.
