# Enum: `MetaobjectUserErrorCode`

Possible error codes that can be returned by `MetaobjectUserError`.

## Values

- `INVALID` — The input value is invalid.
- `INCLUSION` — The input value isn't included in the list.
- `TAKEN` — The input value is already taken.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `PRESENT` — The input value needs to be blank.
- `BLANK` — The input value is blank.
- `INVALID_TYPE` — The metafield type is invalid.
- `INVALID_VALUE` — The value is invalid for the metafield type or the definition options.
- `INVALID_OPTION` — The value for the metafield definition option was invalid.
- `DUPLICATE_FIELD_INPUT` — Duplicate inputs were provided for this field key.
- `UNDEFINED_OBJECT_TYPE` — No metaobject definition found for this type.
- `UNDEFINED_OBJECT_FIELD` — No field definition found for this key.
- `OBJECT_FIELD_TAKEN` — The specified field key is already in use.
- `OBJECT_FIELD_REQUIRED` — Missing required fields were found for this object.
- `RECORD_NOT_FOUND` — The requested record couldn't be found.
- `INTERNAL_ERROR` — An unexpected error occurred.
- `MAX_DEFINITIONS_EXCEEDED` — The maximum number of metaobjects definitions has been exceeded.
- `MAX_OBJECTS_EXCEEDED` — The maximum number of metaobjects per shop has been exceeded.
- `INPUT_LIMIT_EXCEEDED` — The maximum number of input metaobjects has been exceeded.
- `IMMUTABLE` — The targeted object cannot be modified.
- `NOT_AUTHORIZED` — Not authorized.
- `RESERVED_NAME` — The provided name is reserved for system use.
- `DISPLAY_NAME_CONFLICT` — The display name cannot be the same when using the metaobject as a product option.
- `ADMIN_ACCESS_INPUT_NOT_ALLOWED` — Admin access can only be specified on metaobject definitions that have an app-reserved type.
- `APP_CONFIG_MANAGED` — Definition is managed by app configuration and cannot be modified through the API.
- `STANDARD_METAOBJECT_DEFINITION_DEPENDENT_ON_APP` — Definition is required by an installed app and cannot be deleted.
- `CAPABILITY_NOT_ENABLED` — The capability you are using is not enabled.
- `URL_HANDLE_TAKEN` — The Online Store URL handle is already taken.
- `URL_HANDLE_INVALID` — The Online Store URL handle is invalid.
- `URL_HANDLE_BLANK` — The Online Store URL handle cannot be blank.
- `FIELD_TYPE_INVALID` — Renderable data input is referencing an invalid field.
- `MISSING_REQUIRED_KEYS` — The input is missing required keys.
- `REFERENCE_EXISTS_ERROR` — The action cannot be completed because associated metaobjects are referenced by another resource.
