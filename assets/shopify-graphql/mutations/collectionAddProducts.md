# Mutation: `collectionAddProducts`

**Returns:** `CollectionAddProductsPayload`

Adds multiple products to an existing collection in a single operation. This mutation provides an efficient way to bulk-manage collection membership without individual product updates.

For example, when merchants create seasonal collections, they can add dozens of related products at once rather than updating each product individually. A clothing store might add all winter jackets to a "Winter Collection" in one operation.

Use `CollectionAddProducts` to:
- Bulk-add products to collections for efficient catalog management
- Implement collection building tools in admin interfaces
- Organize collection membership during bulk product operations
- Reduce API calls when managing large product sets

The mutation processes multiple product additions and returns success status along with any errors encountered during the operation. Products are added to the collection while preserving existing collection settings.

This operation only works with manual collections where merchants explicitly choose which products to include. It will return an error if used with smart collections that automatically include products based on conditions.

Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

## Arguments

- **`id`**: `ID!` — The ID of the collection that's being updated. This can't be a smart collection.
- **`productIds`**: `[ID!]!` — The IDs of the products that are being added to the collection. If any of the products is already present in the input collection, then an error is raised and no products are added.

## Payload Fields

- `collection`: `Collection` — The updated collection. Returns `null` if an error is raised.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Collection](../types/objects/Collection.md)
- [CollectionAddProductsPayload](../types/objects/CollectionAddProductsPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CollectionAddProducts($id: ID!, $productIds: [ID!]!) {
  collectionAddProducts(id: $id, productIds: $productIds) {
    collection {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
