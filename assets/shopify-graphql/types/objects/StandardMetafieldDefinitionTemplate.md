# Object: `StandardMetafieldDefinitionTemplate`

Standard metafield definition templates provide preset configurations to create metafield definitions.
Each template has a specific namespace and key that we've reserved to have specific meanings for common use cases.

Refer to the [list of standard metafield definitions](https://shopify.dev/apps/metafields/definitions/standard-definitions).

**Implements:** `Node`

## Fields

- `description`: `String` — The description of the standard metafield definition.
- `id`: `ID!` — A globally-unique ID.
- `key`: `String!` — The key owned by the definition after the definition has been activated.
- `name`: `String!` — The human-readable name for the standard metafield definition.
- `namespace`: `String!` — The namespace owned by the definition after the definition has been activated.
- `ownerTypes`: `[MetafieldOwnerType!]!` — The list of resource types that the standard metafield definition can be applied to.
- `type`: `MetafieldDefinitionType!` — The associated [metafield definition type](https://shopify.dev/apps/metafields/definitions/types) that the metafield stores.
- `validations`: `[MetafieldDefinitionValidation!]!` — The configured validations for the standard metafield definition.
- `visibleToStorefrontApi`: `Boolean!` — Whether metafields for the definition are by default visible using the Storefront API.

## Related Types

- [MetafieldDefinitionType](../../types/objects/MetafieldDefinitionType.md)
- [MetafieldDefinitionValidation](../../types/objects/MetafieldDefinitionValidation.md)
- [MetafieldOwnerType](../../types/enums/MetafieldOwnerType.md)
