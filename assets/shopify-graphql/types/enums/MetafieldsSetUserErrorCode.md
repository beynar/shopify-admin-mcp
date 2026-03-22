# Enum: `MetafieldsSetUserErrorCode`

Possible error codes that can be returned by `MetafieldsSetUserError`.

## Values

- `CAPABILITY_VIOLATION` — The metafield violates a capability restriction.
- `STALE_OBJECT` — The metafield has been modified since it was loaded.
- `INVALID_COMPARE_DIGEST` — The compareDigest is invalid.
- `INVALID_TYPE` — The type is invalid.
- `INVALID_VALUE` — The value is invalid for the metafield type or for the definition options.
- `APP_NOT_AUTHORIZED` — ApiPermission metafields can only be created or updated by the app owner.
- `INCLUSION` — The input value isn't included in the list.
- `TAKEN` — The input value is already taken.
- `PRESENT` — The input value needs to be blank.
- `BLANK` — The input value is blank.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `LESS_THAN_OR_EQUAL_TO` — The input value should be less than or equal to the maximum value allowed.
- `INVALID` — The input value is invalid.
- `INTERNAL_ERROR` — An internal error occurred.
