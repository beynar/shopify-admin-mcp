# Enum: `MetafieldDefinitionUpdateUserErrorCode`

Possible error codes that can be returned by `MetafieldDefinitionUpdateUserError`.

## Values

- `PRESENT` — The input value needs to be blank.
- `TOO_LONG` — The input value is too long.
- `BLANK` — The input value is blank.
- `INVALID` — The input value is invalid.
- `NOT_FOUND` — The metafield definition wasn't found.
- `INVALID_INPUT` — An invalid input.
- `CAPABILITY_REQUIRED_BUT_DISABLED` — A capability is required for the definition type but is disabled.
- `PINNED_LIMIT_REACHED` — The pinned limit has been reached for the owner type.
- `INTERNAL_ERROR` — An internal error occurred.
- `UNSUPPORTED_PINNING` — The metafield definition does not support pinning.
- `INVALID_OPTION` — An invalid option.
- `DUPLICATE_OPTION` — A duplicate option.
- `TYPE_NOT_ALLOWED_FOR_CONDITIONS` — The definition type is not eligible to be used as collection condition.
- `METAFIELD_DEFINITION_IN_USE` — Action cannot proceed. Definition is currently in use.
- `OWNER_TYPE_LIMIT_EXCEEDED_FOR_AUTOMATED_COLLECTIONS` — You have reached the maximum allowed definitions for automated collections.
- `OWNER_TYPE_LIMIT_EXCEEDED_FOR_USE_AS_ADMIN_FILTERS` — You have reached the maximum allowed definitions to be used as admin filters.
- `METAOBJECT_DEFINITION_CHANGED` — You cannot change the metaobject definition pointed to by a metaobject reference metafield definition.
- `DISALLOWED_OWNER_TYPE` — Owner type can't be used in this mutation.
- `INVALID_INPUT_COMBINATION` — The input combination is invalid.
- `INVALID_CONSTRAINTS` — The metafield definition constraints are invalid.
- `INVALID_CAPABILITY` — The metafield definition capability is invalid.
- `CAPABILITY_CANNOT_BE_DISABLED` — The metafield definition capability cannot be disabled.
- `ADMIN_ACCESS_INPUT_NOT_ALLOWED` — Admin access can only be specified for app-owned metafield definitions.
- `APP_CONFIG_MANAGED` — Definition is managed by app configuration and cannot be modified through the API.
