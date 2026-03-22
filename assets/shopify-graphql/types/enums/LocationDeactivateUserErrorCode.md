# Enum: `LocationDeactivateUserErrorCode`

Possible error codes that can be returned by `LocationDeactivateUserError`.

## Values

- `LOCATION_NOT_FOUND` — Location not found.
- `PERMANENTLY_BLOCKED_FROM_DEACTIVATION_ERROR` — Location either has a fulfillment service or is the only location with a shipping address.
- `TEMPORARILY_BLOCKED_FROM_DEACTIVATION_ERROR` — Location has incoming inventory. The location can be deactivated after the inventory has been received.
- `HAS_ACTIVE_RETAIL_SUBSCRIPTIONS` — Location needs to be removed from Shopify POS for Retail subscription in Point of Sale channel.
- `DESTINATION_LOCATION_IS_THE_SAME_LOCATION` — Destination location is the same as the location to be deactivated.
- `DESTINATION_LOCATION_NOT_FOUND_OR_INACTIVE` — Destination location is not found or inactive.
- `DESTINATION_LOCATION_NOT_SHOPIFY_MANAGED` — Destination location is not Shopify managed.
- `HAS_ACTIVE_INVENTORY_ERROR` — Location could not be deactivated without specifying where to relocate inventory at the location.
- `HAS_FULFILLMENT_ORDERS_ERROR` — Location could not be deactivated because it has pending orders.
- `HAS_INCOMING_FROM_EXTERNAL_DOCUMENT_SOURCES` — Location could not be deactivated because it has incoming inventory quantities from third party
- `HAS_INCOMING_MOVEMENTS_ERROR` — Location could not be deactivated because it has open Shopify Fulfillment Network transfers.
- `HAS_OPEN_PURCHASE_ORDERS_ERROR` — Location could not be deactivated because it has open purchase orders.
- `FAILED_TO_RELOCATE_ACTIVE_INVENTORIES` — Failed to relocate active inventories to the destination location.
- `FAILED_TO_RELOCATE_OPEN_PURCHASE_ORDERS` — Failed to relocate open purchase orders to the destination location.
- `FAILED_TO_RELOCATE_INCOMING_MOVEMENTS` — Failed to relocate incoming movements to the destination location.
- `CANNOT_DISABLE_ONLINE_ORDER_FULFILLMENT` — At least one location must fulfill online orders.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
