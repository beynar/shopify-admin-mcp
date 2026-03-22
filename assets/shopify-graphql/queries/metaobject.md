# Query: `metaobject`

**Returns:** `Metaobject`

Retrieves a single [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its global ID. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store custom structured data based on defined schemas. The returned metaobject includes its fields with values, display name, handle, and associated metadata like update timestamps and capabilities.

## Arguments

- **`id`**: `ID!` — The ID of the metaobject to return.

## Return Type Fields

- `capabilities`: `MetaobjectCapabilityData!` — Metaobject capabilities for this Metaobject.
- `createdAt`: `DateTime!` — When the object was created.
- `createdBy`: `App!` — The app used to create the object.
- `createdByApp`: `App!` — The app used to create the object.
- `createdByStaff`: `StaffMember` — The staff member who created the metaobject.
- `definition`: `MetaobjectDefinition!` — The MetaobjectDefinition that models this object type.
- `displayName`: `String!` — The preferred display name field value of the metaobject.
- `field`: `MetaobjectField` — The field for an object key, or null if the key has no field definition.
- `fields`: `[MetaobjectField!]!` — All ordered fields of the metaobject with their definitions and values.
- `handle`: `String!` — The unique handle of the object, useful as a custom ID.
- `id`: `ID!` — A globally-unique ID.
- `referencedBy`: `MetafieldRelationConnection!` — List of back references metafields that belong to the resource.
- `thumbnailField`: `MetaobjectField` — The recommended field to visually represent this metaobject. May be a file reference or color         field.
- `type`: `String!` — The type of the metaobject.
- `updatedAt`: `DateTime!` — When the object was last updated.

## Related Types

- [App](../types/objects/App.md)
- [Metaobject](../types/objects/Metaobject.md)
- [MetaobjectCapabilityData](../types/objects/MetaobjectCapabilityData.md)
- [MetaobjectDefinition](../types/objects/MetaobjectDefinition.md)
- [MetaobjectField](../types/objects/MetaobjectField.md)
- [StaffMember](../types/objects/StaffMember.md)

## Example Query

```graphql
query Metaobject($id: ID!) {
  metaobject(id: $id) {
    createdAt
    displayName
    handle
    type
  }
}
```
