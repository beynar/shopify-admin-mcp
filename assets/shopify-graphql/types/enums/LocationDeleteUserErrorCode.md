# Enum: `LocationDeleteUserErrorCode`

Possible error codes that can be returned by `LocationDeleteUserError`.

## Values

- `LOCATION_NOT_FOUND` — Location not found.
- `LOCATION_IS_ACTIVE` — The location cannot be deleted while it is active.
- `GENERIC_ERROR` — An error occurred while deleting the location.
- `LOCATION_HAS_INVENTORY` — The location cannot be deleted while it has inventory.
- `LOCATION_HAS_PENDING_ORDERS` — The location cannot be deleted while it has pending orders.
- `LOCATION_HAS_ACTIVE_RETAIL_SUBSCRIPTION` — The location cannot be deleted while it has any active Retail subscriptions in the Point of Sale channel.
