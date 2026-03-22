# Object: `MetaobjectDefinition`

Defines the structure and configuration for a custom data type in Shopify. Each definition specifies the fields, validation rules, and capabilities that apply to all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries created from it.

The definition includes field definitions that determine what data to store, access controls for [the Shopify admin](https://shopify.dev/docs/apps/build/custom-data/permissions#admin-permissions) and [Storefront](https://shopify.dev/docs/apps/build/custom-data/permissions#storefront-permissions) APIs, and capabilities such as publishability and translatability. You can track which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) or [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) created the definition and optionally base it on a [`StandardMetaobjectDefinitionTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate).

**Implements:** `Node`

## Fields

- `access`: `MetaobjectAccess!` — Access configuration for the metaobject definition.
- `capabilities`: `MetaobjectCapabilities!` — The capabilities of the metaobject definition.
- `createdByApp`: `App!` — The app used to create the metaobject definition.
- `createdByStaff`: `StaffMember` — The staff member who created the metaobject definition.
- `description`: `String` — The administrative description.
- `displayNameKey`: `String` — The key of a field to reference as the display name for each object.
- `fieldDefinitions`: `[MetaobjectFieldDefinition!]!` — The fields defined for this object type.
- `hasThumbnailField`: `Boolean!` — Whether this metaobject definition has field whose type can visually represent a metaobject with        the `thumbnailField`.
- `id`: `ID!` — A globally-unique ID.
- `metaobjects` `(first, after, last, before, reverse)`: `MetaobjectConnection!` — A paginated connection to the metaobjects associated with the definition.
- `metaobjectsCount`: `Int!` — The count of metaobjects created for the definition.
- `name`: `String!` — The human-readable name.
- `standardTemplate`: `StandardMetaobjectDefinitionTemplate` — The standard metaobject template associated with the definition.
- `type`: `String!` — The type of the object definition. Defines the namespace of associated metafields.

## Related Types

- [App](../../types/objects/App.md)
- [MetaobjectAccess](../../types/objects/MetaobjectAccess.md)
- [MetaobjectCapabilities](../../types/objects/MetaobjectCapabilities.md)
- [MetaobjectFieldDefinition](../../types/objects/MetaobjectFieldDefinition.md)
- [StaffMember](../../types/objects/StaffMember.md)
- [StandardMetaobjectDefinitionTemplate](../../types/objects/StandardMetaobjectDefinitionTemplate.md)
