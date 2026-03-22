# Object: `MetafieldDefinitionIdentifier`

Identifies a metafield definition by its owner type, namespace, and key.

## Fields

- `key`: `String!` — The unique identifier for the metafield definition within its namespace.
- `namespace`: `String!` — The container for a group of metafields that the metafield definition is associated with.
- `ownerType`: `MetafieldOwnerType!` — The resource type that the metafield definition is attached to.

## Related Types

- [MetafieldOwnerType](../../types/enums/MetafieldOwnerType.md)
