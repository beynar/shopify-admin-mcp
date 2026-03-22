# Object: `MetaobjectFieldDefinition`

Defines a field for a MetaobjectDefinition with properties
such as the field's data type and validations.

## Fields

- `capabilities`: `MetaobjectFieldDefinitionCapabilities!` — Capabilities available for this metaobject field definition.
- `description`: `String` — The administrative description.
- `key`: `String!` — A key name used to identify the field within the metaobject composition.
- `name`: `String!` — The human-readable name.
- `required`: `Boolean!` — Required status of the field within the metaobject composition.
- `type`: `MetafieldDefinitionType!` — The type of data that the field stores.
- `validations`: `[MetafieldDefinitionValidation!]!` — A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for

## Related Types

- [MetafieldDefinitionType](../../types/objects/MetafieldDefinitionType.md)
- [MetafieldDefinitionValidation](../../types/objects/MetafieldDefinitionValidation.md)
- [MetaobjectFieldDefinitionCapabilities](../../types/objects/MetaobjectFieldDefinitionCapabilities.md)
