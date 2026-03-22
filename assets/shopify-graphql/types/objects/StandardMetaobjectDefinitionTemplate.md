# Object: `StandardMetaobjectDefinitionTemplate`

Standard metaobject definition templates provide preset configurations to create metaobject definitions.

## Fields

- `description`: `String` — The administrative description.
- `displayNameKey`: `String` — The key of a field to reference as the display name for each object.
- `enabledCapabilities`: `[StandardMetaobjectCapabilityTemplate!]!` — The capabilities of the metaobject definition.
- `fieldDefinitions`: `[StandardMetaobjectDefinitionFieldTemplate!]!` — Templates for the associated field definitions.
- `name`: `String!` — The human-readable name.
- `type`: `String!` — The namespace owned by the definition after the definition has been enabled.

## Related Types

- [StandardMetaobjectCapabilityTemplate](../../types/objects/StandardMetaobjectCapabilityTemplate.md)
- [StandardMetaobjectDefinitionFieldTemplate](../../types/objects/StandardMetaobjectDefinitionFieldTemplate.md)
