# Input Object: `MetaobjectFieldDefinitionCreateInput`

The input fields for creating a metaobject field definition.

## Input Fields

- `key`: `String!` — The key of the new field definition. This can't be changed.
- `type`: `String!` — The metafield type applied to values of the field.
- `name`: `String` — A human-readable name for the field. This can be changed at any time.
- `description`: `String` — An administrative description of the field.
- `required`: `Boolean` = `false` — Whether metaobjects require a saved value for the field.
- `validations`: `[MetafieldDefinitionValidationInput!]` — Custom validations that apply to values assigned to the field.
- `capabilities`: `MetaobjectFieldDefinitionCapabilityCreateInput` — Capabilities configuration for this field.

## Related Types

- [MetafieldDefinitionValidationInput](../../types/inputs/MetafieldDefinitionValidationInput.md)
- [MetaobjectFieldDefinitionCapabilityCreateInput](../../types/inputs/MetaobjectFieldDefinitionCapabilityCreateInput.md)
