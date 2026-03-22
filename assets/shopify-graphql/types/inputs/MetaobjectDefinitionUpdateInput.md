# Input Object: `MetaobjectDefinitionUpdateInput`

The input fields for updating a metaobject definition.

## Input Fields

- `name`: `String` — A human-readable name for the definition.
- `description`: `String` — An administrative description of the definition.
- `fieldDefinitions`: `[MetaobjectFieldDefinitionOperationInput!]` — A set of operations for modifying field definitions.
- `access`: `MetaobjectAccessInput` — Access configuration for the metaobjects created with this definition.
- `displayNameKey`: `String` — The key of a metafield to reference as the display name for objects of this type.
- `resetFieldOrder`: `Boolean` = `false` — Whether the field order should be reset while updating.
- `capabilities`: `MetaobjectCapabilityUpdateInput` — The capabilities of the metaobject definition.

## Related Types

- [MetaobjectAccessInput](../../types/inputs/MetaobjectAccessInput.md)
- [MetaobjectCapabilityUpdateInput](../../types/inputs/MetaobjectCapabilityUpdateInput.md)
- [MetaobjectFieldDefinitionOperationInput](../../types/inputs/MetaobjectFieldDefinitionOperationInput.md)
