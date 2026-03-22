# Object: `MetafieldRelation`

Defines a relation between two resources via a reference metafield.
The referencer owns the joining field with a given namespace and key,
while the target is referenced by the field.

## Fields

- `key`: `String!` — The key of the field making the reference.
- `name`: `String!` — The name of the field making the reference.
- `namespace`: `String!` — The namespace of the metafield making the reference, or type of the metaobject.
- `referencer`: `MetafieldReferencer!` — The resource making the reference.
- `target`: `MetafieldReference!` *(deprecated)* — The referenced resource.

## Related Types

- [MetafieldReference](../../types/unions/MetafieldReference.md)
- [MetafieldReferencer](../../types/unions/MetafieldReferencer.md)
