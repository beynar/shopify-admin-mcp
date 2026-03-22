# Enum: `LocationAddUserErrorCode`

Possible error codes that can be returned by `LocationAddUserError`.

## Values

- `INVALID` — The input value is invalid.
- `TOO_LONG` — The input value is too long.
- `TAKEN` — The input value is already taken.
- `BLANK` — The input value is blank.
- `INVALID_US_ZIPCODE` — The ZIP code is not a valid US ZIP code.
- `GENERIC_ERROR` — An error occurred while adding the location.
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
