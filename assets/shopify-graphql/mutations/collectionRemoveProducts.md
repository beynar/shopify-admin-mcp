# Mutation: `collectionRemoveProducts`

**Returns:** `CollectionRemoveProductsPayload`

Removes multiple products from a collection in a single operation. This mutation can process large product sets (up to 250 products) and may take significant time to complete for collections with many products.

For example, when ending a seasonal promotion, merchants can remove all sale items from a "Summer Clearance" collection at once rather than editing each product individually.

Use `CollectionRemoveProducts` to:
- Bulk-remove products from collections efficiently
- Clean up collection membership during catalog updates
- Implement automated collection management workflows

The operation processes asynchronously to avoid timeouts and performance issues, especially for large product sets.

Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

## Arguments

- **`id`**: `ID!` — The ID of the collection to remove products from. The ID must reference an existing manual collection.
- **`productIds`**: `[ID!]!` — The IDs of products to remove from the collection. The mutation doesn't validate that the products belong to the collection or whether the products exist.

## Payload Fields

- `job`: `Job` — The asynchronous job removing the products.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CollectionRemoveProductsPayload](../types/objects/CollectionRemoveProductsPayload.md)
- [Job](../types/objects/Job.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CollectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
  collectionRemoveProducts(id: $id, productIds: $productIds) {
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
