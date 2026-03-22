# Input Object: `MetaobjectDefinitionCreateInput`

The input fields for creating a metaobject definition.

## Input Fields

- `name`: `String` — A human-readable name for the definition. This can be changed at any time.
- `description`: `String` — An administrative description of the definition.
- `type`: `String!` — The type of the metaobject definition. This can't be changed.
- `fieldDefinitions`: `[MetaobjectFieldDefinitionCreateInput!]!` — A set of field definitions to create on this metaobject definition.
- `access`: `MetaobjectAccessInput` — Access configuration for the metaobjects created with this definition.
- `displayNameKey`: `String` — The key of a field to reference as the display name for metaobjects of this type.
- `capabilities`: `MetaobjectCapabilityCreateInput` — The capabilities of the metaobject definition.

## Related Types

- [MetaobjectAccessInput](../../types/inputs/MetaobjectAccessInput.md)
- [MetaobjectCapabilityCreateInput](../../types/inputs/MetaobjectCapabilityCreateInput.md)
- [MetaobjectFieldDefinitionCreateInput](../../types/inputs/MetaobjectFieldDefinitionCreateInput.md)
