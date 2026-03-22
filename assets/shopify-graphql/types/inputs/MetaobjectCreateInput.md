# Input Object: `MetaobjectCreateInput`

The input fields for creating a metaobject.

## Input Fields

- `type`: `String!` — The type of the metaobject. Must match an existing metaobject definition type.
- `handle`: `String` — A unique handle for the metaobject. This value is auto-generated when omitted.
- `fields`: `[MetaobjectFieldInput!]` — Values for fields. These are mapped by key to fields of the metaobject definition.
- `capabilities`: `MetaobjectCapabilityDataInput` — Capabilities for the metaobject.

## Related Types

- [MetaobjectCapabilityDataInput](../../types/inputs/MetaobjectCapabilityDataInput.md)
- [MetaobjectFieldInput](../../types/inputs/MetaobjectFieldInput.md)
