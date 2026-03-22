# Enum: `MetafieldDefinitionDeleteUserErrorCode`

Possible error codes that can be returned by `MetafieldDefinitionDeleteUserError`.

## Values

- `PRESENT` — The input value needs to be blank.
- `NOT_FOUND` — Definition not found.
- `INTERNAL_ERROR` — An internal error occurred.
- `ID_TYPE_DELETION_ERROR` — Deleting an id type metafield definition requires deletion of its associated metafields.
- `REFERENCE_TYPE_DELETION_ERROR` — Deleting a reference type metafield definition requires deletion of its associated metafields.
- `RESERVED_NAMESPACE_ORPHANED_METAFIELDS` — Deleting a definition in a reserved namespace requires deletion of its associated metafields.
- `METAFIELD_DEFINITION_IN_USE` — Action cannot proceed. Definition is currently in use.
- `APP_CONFIG_MANAGED` — Definition is managed by app configuration and cannot be modified through the API.
- `STANDARD_METAFIELD_DEFINITION_DEPENDENT_ON_APP` — Definition is required by an installed app and cannot be deleted.
- `DISALLOWED_OWNER_TYPE` — Owner type can't be used in this mutation.
