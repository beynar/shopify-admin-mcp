# Enum: `MetafieldDefinitionCreateUserErrorCode`

Possible error codes that can be returned by `MetafieldDefinitionCreateUserError`.

## Values

- `INVALID` — The input value is invalid.
- `INCLUSION` — The input value isn't included in the list.
- `PRESENT` — The input value needs to be blank.
- `TAKEN` — The input value is already taken.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `BLANK` — The input value is blank.
- `CAPABILITY_REQUIRED_BUT_DISABLED` — A capability is required for the definition type but is disabled.
- `RESOURCE_TYPE_LIMIT_EXCEEDED` — The definition limit per owner type has exceeded.
- `RESOURCE_TYPE_LIMIT_EXCEEDED_BY_APP` — The definition limit per owner type for the app has exceeded.
- `LIMIT_EXCEEDED` — The maximum limit of definitions per owner type has exceeded.
- `INVALID_OPTION` — An invalid option.
- `DUPLICATE_OPTION` — A duplicate option.
- `RESERVED_NAMESPACE_KEY` — This namespace and key combination is reserved for standard definitions.
- `PINNED_LIMIT_REACHED` — The pinned limit has been reached for the owner type.
- `UNSTRUCTURED_ALREADY_EXISTS` — This namespace and key combination is already in use for a set of your metafields.
- `UNSUPPORTED_PINNING` — The metafield definition does not support pinning.
- `INVALID_CHARACTER` — A field contains an invalid character.
- `TYPE_NOT_ALLOWED_FOR_CONDITIONS` — The definition type is not eligible to be used as collection condition.
- `OWNER_TYPE_LIMIT_EXCEEDED_FOR_AUTOMATED_COLLECTIONS` — You have reached the maximum allowed definitions for automated collections.
- `OWNER_TYPE_LIMIT_EXCEEDED_FOR_USE_AS_ADMIN_FILTERS` — You have reached the maximum allowed definitions to be used as admin filters.
- `INVALID_CONSTRAINTS` — The metafield definition constraints are invalid.
- `INVALID_INPUT_COMBINATION` — The input combination is invalid.
- `INVALID_CAPABILITY` — The metafield definition capability is invalid.
- `ADMIN_ACCESS_INPUT_NOT_ALLOWED` — Admin access can only be specified for app-owned metafield definitions.
