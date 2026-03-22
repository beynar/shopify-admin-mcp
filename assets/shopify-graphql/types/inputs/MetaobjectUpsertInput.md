# Input Object: `MetaobjectUpsertInput`

The input fields for upserting a metaobject.

## Input Fields

- `handle`: `String` — The handle of the metaobject.
- `fields`: `[MetaobjectFieldInput!]` — Values for fields. These are mapped by key to fields of the metaobject definition.
- `capabilities`: `MetaobjectCapabilityDataInput` — Capabilities for the metaobject.

## Related Types

- [MetaobjectCapabilityDataInput](../../types/inputs/MetaobjectCapabilityDataInput.md)
- [MetaobjectFieldInput](../../types/inputs/MetaobjectFieldInput.md)
