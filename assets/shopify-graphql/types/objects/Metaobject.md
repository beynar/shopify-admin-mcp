# Object: `Metaobject`

An instance of custom structured data defined by a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store reusable data that extends beyond Shopify's standard resources, such as product highlights, size charts, or custom content sections.

Each metaobject includes fields that match the field types and validation rules specified in its definition, which also determines the metaobject's capabilities, such as storefront visibility, publishing and translation support. [`Metafields`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) can reference metaobjects to connect custom data with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other Shopify resources.

**Implements:** `Node`

## Fields

- `capabilities`: `MetaobjectCapabilityData!` — Metaobject capabilities for this Metaobject.
- `createdAt`: `DateTime!` — When the object was created.
- `createdBy`: `App!` — The app used to create the object.
- `createdByApp`: `App!` — The app used to create the object.
- `createdByStaff`: `StaffMember` — The staff member who created the metaobject.
- `definition`: `MetaobjectDefinition!` — The MetaobjectDefinition that models this object type.
- `displayName`: `String!` — The preferred display name field value of the metaobject.
- `field` `(key)`: `MetaobjectField` — The field for an object key, or null if the key has no field definition.
- `fields`: `[MetaobjectField!]!` — All ordered fields of the metaobject with their definitions and values.
- `handle`: `String!` — The unique handle of the object, useful as a custom ID.
- `id`: `ID!` — A globally-unique ID.
- `referencedBy` `(first, after, last, before, reverse)`: `MetafieldRelationConnection!` — List of back references metafields that belong to the resource.
- `staffMember`: `StaffMember` *(deprecated)* — The staff member who created the metaobject.
- `thumbnailField`: `MetaobjectField` — The recommended field to visually represent this metaobject. May be a file reference or color         field.
- `type`: `String!` — The type of the metaobject.
- `updatedAt`: `DateTime!` — When the object was last updated.

## Related Types

- [App](../../types/objects/App.md)
- [MetaobjectCapabilityData](../../types/objects/MetaobjectCapabilityData.md)
- [MetaobjectDefinition](../../types/objects/MetaobjectDefinition.md)
- [MetaobjectField](../../types/objects/MetaobjectField.md)
- [StaffMember](../../types/objects/StaffMember.md)
