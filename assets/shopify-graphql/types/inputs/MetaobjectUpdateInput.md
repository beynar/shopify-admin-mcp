# Input Object: `MetaobjectUpdateInput`

The input fields for updating a metaobject.

## Input Fields

- `handle`: `String` — A unique handle for the metaobject.
- `fields`: `[MetaobjectFieldInput!]` — Values for fields. These are mapped by key to fields of the metaobject definition.
- `capabilities`: `MetaobjectCapabilityDataInput` — Capabilities for the metaobject.
- `redirectNewHandle`: `Boolean` = `false` — Whether to create a redirect for the metaobject.

## Related Types

- [MetaobjectCapabilityDataInput](../../types/inputs/MetaobjectCapabilityDataInput.md)
- [MetaobjectFieldInput](../../types/inputs/MetaobjectFieldInput.md)
