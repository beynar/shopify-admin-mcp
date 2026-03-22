# Query: `metaobjectByHandle`

**Returns:** `Metaobject`

Retrieves a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its handle and type. Handles are unique identifiers within a metaobject type.

## Arguments

- **`handle`**: `MetaobjectHandleInput!` — The identifier of the metaobject to return.

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
- [MetaobjectHandleInput](../types/inputs/MetaobjectHandleInput.md)
- [StaffMember](../types/objects/StaffMember.md)

## Example Query

```graphql
query MetaobjectByHandle($handle: MetaobjectHandleInput!) {
  metaobjectByHandle(handle: $handle) {
    createdAt
    displayName
    handle
    type
  }
}
```
