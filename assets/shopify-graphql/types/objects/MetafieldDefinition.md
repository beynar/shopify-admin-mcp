# Object: `MetafieldDefinition`

Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.

The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.

**Implements:** `Node`

## Fields

- `access`: `MetafieldAccess!` — The access settings associated with the metafield definition.
- `capabilities`: `MetafieldCapabilities!` — The capabilities of the metafield definition.
- `constraints`: `MetafieldDefinitionConstraints` — The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions)
- `description`: `String` — The description of the metafield definition.
- `id`: `ID!` — A globally-unique ID.
- `key`: `String!` — The unique identifier for the metafield definition within its namespace.
- `metafields` `(validationStatus, first, after, last, before, reverse)`: `MetafieldConnection!` — The metafields that belong to the metafield definition.
- `metafieldsCount` `(validationStatus)`: `Int!` — The count of the metafields that belong to the metafield definition.
- `name`: `String!` — The human-readable name of the metafield definition.
- `namespace`: `String!` — The container for a group of metafields that the metafield definition is associated with.
- `ownerType`: `MetafieldOwnerType!` — The resource type that the metafield definition is attached to.
- `pinnedPosition`: `Int` — The position of the metafield definition in the pinned list.
- `standardTemplate`: `StandardMetafieldDefinitionTemplate` — The standard metafield definition template associated with the metafield definition.
- `type`: `MetafieldDefinitionType!` — The type of data that each of the metafields that belong to the metafield definition will store.
- `useAsCollectionCondition`: `Boolean!` — Whether the metafield definition can be used as a collection condition.
- `validationStatus`: `MetafieldDefinitionValidationStatus!` — The validation status for the metafields that belong to the metafield definition.
- `validations`: `[MetafieldDefinitionValidation!]!` — A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for

## Related Types

- [MetafieldAccess](../../types/objects/MetafieldAccess.md)
- [MetafieldCapabilities](../../types/objects/MetafieldCapabilities.md)
- [MetafieldDefinitionConstraints](../../types/objects/MetafieldDefinitionConstraints.md)
- [MetafieldDefinitionType](../../types/objects/MetafieldDefinitionType.md)
- [MetafieldDefinitionValidation](../../types/objects/MetafieldDefinitionValidation.md)
- [MetafieldDefinitionValidationStatus](../../types/enums/MetafieldDefinitionValidationStatus.md)
- [MetafieldOwnerType](../../types/enums/MetafieldOwnerType.md)
- [MetafieldValidationStatus](../../types/enums/MetafieldValidationStatus.md)
- [StandardMetafieldDefinitionTemplate](../../types/objects/StandardMetafieldDefinitionTemplate.md)
