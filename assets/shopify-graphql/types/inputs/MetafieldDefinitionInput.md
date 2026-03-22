# Input Object: `MetafieldDefinitionInput`

The input fields required to create a metafield definition.

## Input Fields

- `namespace`: `String` — The container for a group of metafields that the metafield definition will be associated with. If omitted, the
- `key`: `String!` — The unique identifier for the metafield definition within its namespace.
- `name`: `String!` — The human-readable name for the metafield definition.
- `description`: `String` — The description for the metafield definition.
- `ownerType`: `MetafieldOwnerType!` — The resource type that the metafield definition is attached to.
- `type`: `String!` — The type of data that each of the metafields that belong to the metafield definition will store.
- `validations`: `[MetafieldDefinitionValidationInput!]` — A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
- `pin`: `Boolean` = `false` — Whether to [pin](https://help.shopify.com/manual/custom-data/metafields/pinning-metafield-definitions)
- `access`: `MetafieldAccessInput` — The access settings that apply to each of the metafields that belong to the metafield definition.
- `constraints`: `MetafieldDefinitionConstraintsInput` — The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions)
- `capabilities`: `MetafieldCapabilityCreateInput` — The capabilities of the metafield definition.

## Related Types

- [MetafieldAccessInput](../../types/inputs/MetafieldAccessInput.md)
- [MetafieldCapabilityCreateInput](../../types/inputs/MetafieldCapabilityCreateInput.md)
- [MetafieldDefinitionConstraintsInput](../../types/inputs/MetafieldDefinitionConstraintsInput.md)
- [MetafieldDefinitionValidationInput](../../types/inputs/MetafieldDefinitionValidationInput.md)
- [MetafieldOwnerType](../../types/enums/MetafieldOwnerType.md)
