# Object: `MetaobjectField`

Provides a field definition and the data value assigned to it.

## Fields

- `definition`: `MetaobjectFieldDefinition!` — The field definition for this object key.
- `jsonValue`: `JSON` — The assigned field value in JSON format.
- `key`: `String!` — The object key of this field.
- `reference`: `MetafieldReference` — For resource reference fields, provides the referenced object.
- `references` `(first, after, last, before)`: `MetafieldReferenceConnection` — For resource reference list fields, provides the list of referenced objects.
- `thumbnail`: `MetaobjectThumbnail` — For file reference or color fields, provides visual attributes for this field.
- `type`: `String!` — The type of the field.
- `value`: `String` — The assigned field value, always stored as a string regardless of the field type.

## Related Types

- [MetafieldReference](../../types/unions/MetafieldReference.md)
- [MetaobjectFieldDefinition](../../types/objects/MetaobjectFieldDefinition.md)
- [MetaobjectThumbnail](../../types/objects/MetaobjectThumbnail.md)
