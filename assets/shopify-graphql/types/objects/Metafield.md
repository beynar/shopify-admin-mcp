# Object: `Metafield`

Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection).
For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields).
Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers.
Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

**Implements:** `HasCompareDigest`, `LegacyInteroperability`, `Node`

## Fields

- `compareDigest`: `String!` — The data stored in the resource, represented as a digest.
- `createdAt`: `DateTime!` — The date and time when the metafield was created.
- `definition`: `MetafieldDefinition` — The metafield definition that the metafield belongs to, if any.
- `description`: `String` *(deprecated)* — The description of the metafield.
- `id`: `ID!` — A globally-unique ID.
- `jsonValue`: `JSON!` — The data stored in the metafield in JSON format.
- `key`: `String!` — The unique identifier for the metafield within its namespace.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `namespace`: `String!` — The container for a group of metafields that the metafield is associated with.
- `owner`: `HasMetafields!` — The resource that the metafield is attached to.
- `ownerType`: `MetafieldOwnerType!` — The type of resource that the metafield is attached to.
- `reference`: `MetafieldReference` — Returns a reference object if the metafield definition's type is a resource reference.
- `references` `(first, after, last, before)`: `MetafieldReferenceConnection` — A list of reference objects if the metafield's type is a resource reference list.
- `type`: `String!` — The type of data that's stored in the metafield.
- `updatedAt`: `DateTime!` — The date and time when the metafield was updated.
- `value`: `String!` — The data stored in the metafield. Always stored as a string, regardless of the metafield's type.

## Related Types

- [HasMetafields](../../types/interfaces/HasMetafields.md)
- [MetafieldDefinition](../../types/objects/MetafieldDefinition.md)
- [MetafieldOwnerType](../../types/enums/MetafieldOwnerType.md)
- [MetafieldReference](../../types/unions/MetafieldReference.md)
