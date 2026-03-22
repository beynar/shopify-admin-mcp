# Mutation: `collectionAddProductsV2`

**Returns:** `CollectionAddProductsV2Payload`

Adds products to a [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the operation's progress. This mutation handles large product sets efficiently by processing them in the background.

You can poll the returned job using the [`job`](https://shopify.dev/docs/api/admin-graphql/latest/queries/job) query to monitor completion status.

> Note:
> This mutation adds products in the order specified in the [`productIds`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts#arguments-productIds) argument.

## Arguments

- **`id`**: `ID!` — The ID of the collection that's being updated.
- **`productIds`**: `[ID!]!` — The IDs of the products that are being added to the collection. If the collection's sort order is manual, the products will be added in the order in which they are provided.

## Payload Fields

- `job`: `Job` — The asynchronous job adding the products.
- `userErrors`: `[CollectionAddProductsV2UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CollectionAddProductsV2Payload](../types/objects/CollectionAddProductsV2Payload.md)
- [CollectionAddProductsV2UserError](../types/objects/CollectionAddProductsV2UserError.md)
- [Job](../types/objects/Job.md)

## Example Mutation

```graphql
mutation CollectionAddProductsV2($id: ID!, $productIds: [ID!]!) {
  collectionAddProductsV2(id: $id, productIds: $productIds) {
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
