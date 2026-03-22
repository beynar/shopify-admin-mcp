# Object: `StandardMetaobjectDefinitionFieldTemplate`

A preset field definition on a standard metaobject definition template.

## Fields

- `description`: `String` — The administrative description.
- `key`: `String!` — The key owned by the definition after the definition has been enabled.
- `name`: `String!` — The human-readable name.
- `required`: `Boolean!` — The required status of the field within the object composition.
- `type`: `MetafieldDefinitionType!` — The associated [metafield definition type](https://shopify.dev/apps/metafields/definitions/types) that the metafield stores.
- `validations`: `[MetafieldDefinitionValidation!]!` — The configured validations for the standard metafield definition.
- `visibleToStorefrontApi`: `Boolean!` — Whether metafields for the definition are by default visible using the Storefront API.

## Related Types

- [MetafieldDefinitionType](../../types/objects/MetafieldDefinitionType.md)
- [MetafieldDefinitionValidation](../../types/objects/MetafieldDefinitionValidation.md)
