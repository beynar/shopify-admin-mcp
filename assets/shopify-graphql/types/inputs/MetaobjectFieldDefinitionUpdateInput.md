# Input Object: `MetaobjectFieldDefinitionUpdateInput`

The input fields for updating a metaobject field definition.

## Input Fields

- `key`: `String!` — The key of the field definition to update.
- `name`: `String` — A human-readable name for the field.
- `description`: `String` — An administrative description of the field.
- `required`: `Boolean` — Whether metaobjects require a saved value for the field.
- `validations`: `[MetafieldDefinitionValidationInput!]` — Custom validations that apply to values assigned to the field.
- `capabilities`: `MetaobjectFieldDefinitionCapabilityCreateInput` — Capabilities configuration for this field.

## Related Types

- [MetafieldDefinitionValidationInput](../../types/inputs/MetafieldDefinitionValidationInput.md)
- [MetaobjectFieldDefinitionCapabilityCreateInput](../../types/inputs/MetaobjectFieldDefinitionCapabilityCreateInput.md)
