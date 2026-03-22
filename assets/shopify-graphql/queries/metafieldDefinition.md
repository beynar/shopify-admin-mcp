# Query: `metafieldDefinition`

**Returns:** `MetafieldDefinition`

Retrieves a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition) by its identifier. You can identify a definition using either its owner type, namespace, and key, or its global ID.

Use this query to inspect a definition's configuration, including its data type, validations, access settings, and the count of [metafields](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) using it.

## Arguments

- **`identifier`**: `MetafieldDefinitionIdentifierInput` — The identifier of the MetafieldDefinition to return.

## Return Type Fields

- `access`: `MetafieldAccess!` — The access settings associated with the metafield definition.
- `capabilities`: `MetafieldCapabilities!` — The capabilities of the metafield definition.
- `constraints`: `MetafieldDefinitionConstraints` — The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions)
- `description`: `String` — The description of the metafield definition.
- `id`: `ID!` — A globally-unique ID.
- `key`: `String!` — The unique identifier for the metafield definition within its namespace.
- `metafields`: `MetafieldConnection!` — The metafields that belong to the metafield definition.
- `metafieldsCount`: `Int!` — The count of the metafields that belong to the metafield definition.
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

- [MetafieldAccess](../types/objects/MetafieldAccess.md)
- [MetafieldCapabilities](../types/objects/MetafieldCapabilities.md)
- [MetafieldDefinition](../types/objects/MetafieldDefinition.md)
- [MetafieldDefinitionConstraints](../types/objects/MetafieldDefinitionConstraints.md)
- [MetafieldDefinitionIdentifierInput](../types/inputs/MetafieldDefinitionIdentifierInput.md)
- [MetafieldDefinitionType](../types/objects/MetafieldDefinitionType.md)
- [MetafieldDefinitionValidation](../types/objects/MetafieldDefinitionValidation.md)
- [MetafieldDefinitionValidationStatus](../types/enums/MetafieldDefinitionValidationStatus.md)
- [MetafieldOwnerType](../types/enums/MetafieldOwnerType.md)
- [StandardMetafieldDefinitionTemplate](../types/objects/StandardMetafieldDefinitionTemplate.md)

## Example Query

```graphql
query MetafieldDefinition($identifier: MetafieldDefinitionIdentifierInput) {
  metafieldDefinition(identifier: $identifier) {
    description
    key
    metafieldsCount
    name
  }
}
```
