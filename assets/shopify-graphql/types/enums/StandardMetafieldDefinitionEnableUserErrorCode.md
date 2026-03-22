# Enum: `StandardMetafieldDefinitionEnableUserErrorCode`

Possible error codes that can be returned by `StandardMetafieldDefinitionEnableUserError`.

## Values

- `INVALID` — The input value is invalid.
- `TAKEN` — The input value is already taken.
- `TEMPLATE_NOT_FOUND` — The standard metafield definition template was not found.
- `LIMIT_EXCEEDED` — The maximum number of definitions per owner type has been exceeded.
- `UNSTRUCTURED_ALREADY_EXISTS` — The namespace and key is already in use for a set of your metafields.
- `TYPE_NOT_ALLOWED_FOR_CONDITIONS` — The definition type is not eligible to be used as collection condition.
- `INVALID_CAPABILITY` — The metafield definition capability is invalid.
- `CAPABILITY_CANNOT_BE_DISABLED` — The metafield definition capability cannot be disabled.
- `OWNER_TYPE_LIMIT_EXCEEDED_FOR_USE_AS_ADMIN_FILTERS` — You have reached the maximum allowed definitions to be used as admin filters.
- `UNSUPPORTED_PINNING` — The metafield definition does not support pinning.
- `ADMIN_ACCESS_INPUT_NOT_ALLOWED` — Admin access can only be specified for app-owned metafield definitions.
- `INVALID_INPUT_COMBINATION` — The input combination is invalid.
