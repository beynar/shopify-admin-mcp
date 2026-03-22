# Mutation: `catalogDelete`

**Returns:** `CatalogDeletePayload`

Delete a catalog.

## Arguments

- **`id`**: `ID!` — The ID of the catalog to delete.
- **`deleteDependentResources`**: `Boolean` = `false` — Whether to also delete the price list and the publication owned by the catalog.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted catalog.
- `userErrors`: `[CatalogUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CatalogDeletePayload](../types/objects/CatalogDeletePayload.md)
- [CatalogUserError](../types/objects/CatalogUserError.md)

## Example Mutation

```graphql
mutation CatalogDelete($id: ID!, $deleteDependentResources: Boolean) {
  catalogDelete(id: $id, deleteDependentResources: $deleteDependentResources) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
