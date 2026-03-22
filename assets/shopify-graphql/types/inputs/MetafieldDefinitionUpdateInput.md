# Input Object: `MetafieldDefinitionUpdateInput`

The input fields required to update a metafield definition.

## Input Fields

- `namespace`: `String` — The container for a group of metafields that the metafield definition is associated with. Used to help identify
- `key`: `String!` — The unique identifier for the metafield definition within its namespace. Used to help identify the metafield
- `name`: `String` — The human-readable name for the metafield definition.
- `description`: `String` — The description for the metafield definition.
- `ownerType`: `MetafieldOwnerType!` — The resource type that the metafield definition is attached to. Used to help identify the metafield definition,
- `validations`: `[MetafieldDefinitionValidationInput!]` — A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
- `pin`: `Boolean` — Whether to pin the metafield definition.
- `access`: `MetafieldAccessUpdateInput` — The access settings that apply to each of the metafields that belong to the metafield definition.
- `constraintsUpdates`: `MetafieldDefinitionConstraintsUpdatesInput` — The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions)
- `capabilities`: `MetafieldCapabilityUpdateInput` — The capabilities of the metafield definition.

## Related Types

- [MetafieldAccessUpdateInput](../../types/inputs/MetafieldAccessUpdateInput.md)
- [MetafieldCapabilityUpdateInput](../../types/inputs/MetafieldCapabilityUpdateInput.md)
- [MetafieldDefinitionConstraintsUpdatesInput](../../types/inputs/MetafieldDefinitionConstraintsUpdatesInput.md)
- [MetafieldDefinitionValidationInput](../../types/inputs/MetafieldDefinitionValidationInput.md)
- [MetafieldOwnerType](../../types/enums/MetafieldOwnerType.md)
