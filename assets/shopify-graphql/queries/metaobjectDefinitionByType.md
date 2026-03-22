# Query: `metaobjectDefinitionByType`

**Returns:** `MetaobjectDefinition`

Retrieves a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) by its type. The type serves as a unique identifier that distinguishes one metaobject definition from another.

## Arguments

- **`type`**: `String!` — The type of the metaobject definition to return.

## Return Type Fields

- `access`: `MetaobjectAccess!` — Access configuration for the metaobject definition.
- `capabilities`: `MetaobjectCapabilities!` — The capabilities of the metaobject definition.
- `createdByApp`: `App!` — The app used to create the metaobject definition.
- `createdByStaff`: `StaffMember` — The staff member who created the metaobject definition.
- `description`: `String` — The administrative description.
- `displayNameKey`: `String` — The key of a field to reference as the display name for each object.
- `fieldDefinitions`: `[MetaobjectFieldDefinition!]!` — The fields defined for this object type.
- `hasThumbnailField`: `Boolean!` — Whether this metaobject definition has field whose type can visually represent a metaobject with        the `thumbnailField`.
- `id`: `ID!` — A globally-unique ID.
- `metaobjects`: `MetaobjectConnection!` — A paginated connection to the metaobjects associated with the definition.
- `metaobjectsCount`: `Int!` — The count of metaobjects created for the definition.
- `name`: `String!` — The human-readable name.
- `standardTemplate`: `StandardMetaobjectDefinitionTemplate` — The standard metaobject template associated with the definition.
- `type`: `String!` — The type of the object definition. Defines the namespace of associated metafields.

## Related Types

- [App](../types/objects/App.md)
- [MetaobjectAccess](../types/objects/MetaobjectAccess.md)
- [MetaobjectCapabilities](../types/objects/MetaobjectCapabilities.md)
- [MetaobjectDefinition](../types/objects/MetaobjectDefinition.md)
- [MetaobjectFieldDefinition](../types/objects/MetaobjectFieldDefinition.md)
- [StaffMember](../types/objects/StaffMember.md)
- [StandardMetaobjectDefinitionTemplate](../types/objects/StandardMetaobjectDefinitionTemplate.md)

## Example Query

```graphql
query MetaobjectDefinitionByType($type: String!) {
  metaobjectDefinitionByType(type: $type) {
    description
    displayNameKey
    hasThumbnailField
    metaobjectsCount
  }
}
```
