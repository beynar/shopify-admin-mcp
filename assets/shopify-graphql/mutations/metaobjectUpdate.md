# Mutation: `metaobjectUpdate`

**Returns:** `MetaobjectUpdatePayload`

Updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) with new field values, handle, or capabilities. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) are custom data structures that extend Shopify's data model.

You can modify field values mapped to the metaobject's [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition), update the handle for a unique identifier, and adjust capabilities like publishing status. When updating the handle, you can optionally create a redirect from the old handle to maintain existing references.

## Arguments

- **`id`**: `ID!` — The ID of the metaobject to update.
- **`metaobject`**: `MetaobjectUpdateInput!` — Specifies parameters to update on the metaobject.

## Payload Fields

- `metaobject`: `Metaobject` — The updated metaobject.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Metaobject](../types/objects/Metaobject.md)
- [MetaobjectUpdateInput](../types/inputs/MetaobjectUpdateInput.md)
- [MetaobjectUpdatePayload](../types/objects/MetaobjectUpdatePayload.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)

## Example Mutation

```graphql
mutation MetaobjectUpdate($id: ID!, $metaobject: MetaobjectUpdateInput!) {
  metaobjectUpdate(id: $id, metaobject: $metaobject) {
    metaobject {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
