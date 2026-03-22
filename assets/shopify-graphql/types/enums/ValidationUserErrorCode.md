# Enum: `ValidationUserErrorCode`

Possible error codes that can be returned by `ValidationUserError`.

## Values

- `NOT_FOUND` — Validation not found.
- `FUNCTION_NOT_FOUND` — Function not found.
- `CUSTOM_APP_FUNCTION_NOT_ELIGIBLE` — Shop must be on a Shopify Plus plan to activate functions from a custom app.
- `FUNCTION_DOES_NOT_IMPLEMENT` — Function does not implement the required interface for this cart & checkout validation.
- `PUBLIC_APP_NOT_ALLOWED` — Only unlisted apps can be used for this cart & checkout validation.
- `FUNCTION_PENDING_DELETION` — Function is pending deletion.
- `MAX_VALIDATIONS_ACTIVATED` — Cannot have more than 25 active validation functions.
- `MISSING_FUNCTION_IDENTIFIER` — Either function_id or function_handle must be provided.
- `MULTIPLE_FUNCTION_IDENTIFIERS` — Only one of function_id or function_handle can be provided, not both.
- `INVALID_TYPE` — The type is invalid.
- `INVALID_VALUE` — The value is invalid for the metafield type or for the definition options.
- `APP_NOT_AUTHORIZED` — ApiPermission metafields can only be created or updated by the app owner.
- `UNSTRUCTURED_RESERVED_NAMESPACE` — Unstructured reserved namespace.
- `DISALLOWED_OWNER_TYPE` — Owner type can't be used in this mutation.
- `INCLUSION` — The input value isn't included in the list.
- `TAKEN` — The input value is already taken.
- `PRESENT` — The input value needs to be blank.
- `BLANK` — The input value is blank.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `INVALID` — The input value is invalid.
- `CAPABILITY_VIOLATION` — The metafield violates a capability restriction.
- `INTERNAL_ERROR` — An internal error occurred.
