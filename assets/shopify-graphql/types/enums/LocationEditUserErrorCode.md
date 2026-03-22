# Enum: `LocationEditUserErrorCode`

Possible error codes that can be returned by `LocationEditUserError`.

## Values

- `TOO_LONG` — The input value is too long.
- `BLANK` — The input value is blank.
- `NOT_FOUND` — The record with the ID used as the input value couldn't be found.
- `INVALID` — The input value is invalid.
- `TAKEN` — The input value is already taken.
- `INVALID_US_ZIPCODE` — The ZIP code is not a valid US ZIP code.
- `GENERIC_ERROR` — An error occurred while editing the location.
- `CANNOT_DISABLE_ONLINE_ORDER_FULFILLMENT` — At least one location must fulfill online orders.
- `CANNOT_MODIFY_ONLINE_ORDER_FULFILLMENT_FOR_FS_LOCATION` — Cannot modify the online order fulfillment preference for fulfillment service locations.
- `INVALID_TYPE` — The type is invalid.
- `INVALID_VALUE` — The value is invalid for the metafield type or for the definition options.
- `APP_NOT_AUTHORIZED` — ApiPermission metafields can only be created or updated by the app owner.
- `UNSTRUCTURED_RESERVED_NAMESPACE` — Unstructured reserved namespace.
- `DISALLOWED_OWNER_TYPE` — Owner type can't be used in this mutation.
- `INCLUSION` — The input value isn't included in the list.
- `PRESENT` — The input value needs to be blank.
- `TOO_SHORT` — The input value is too short.
- `CAPABILITY_VIOLATION` — The metafield violates a capability restriction.
- `INTERNAL_ERROR` — An internal error occurred.
