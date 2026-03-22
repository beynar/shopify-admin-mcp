# Mutation: `productDuplicate`

**Returns:** `ProductDuplicatePayload`

Duplicates a product.

If you need to duplicate a large product, such as one that has many
[variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput)
that are active at several
[locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput),
you might encounter timeout errors.

To avoid these timeout errors, you can instead duplicate the product asynchronously.

In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

Metafield values are not duplicated if the unique values capability is enabled.

## Arguments

- **`productId`**: `ID!` — The ID of the product to be duplicated.
- **`newTitle`**: `String!` — The new title of the product.
- **`newStatus`**: `ProductStatus` — The new status of the product. If no value is provided the status will be inherited from the original product.
- **`includeImages`**: `Boolean` = `false` — Specifies whether or not to duplicate images.
- **`includeTranslations`**: `Boolean` = `false` — Specifies whether or not to duplicate translations.
- **`synchronous`**: `Boolean` = `true` — Specifies whether or not to run the mutation synchronously.

## Payload Fields

- `imageJob`: `Job` — The asynchronous job that duplicates the product images.
- `newProduct`: `Product` — The duplicated product.
- `productDuplicateOperation`: `ProductDuplicateOperation` — The product duplicate operation, returned when run in asynchronous mode.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [Product](../types/objects/Product.md)
- [ProductDuplicateOperation](../types/objects/ProductDuplicateOperation.md)
- [ProductDuplicatePayload](../types/objects/ProductDuplicatePayload.md)
- [ProductStatus](../types/enums/ProductStatus.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductDuplicate($productId: ID!, $newTitle: String!, $newStatus: ProductStatus, $includeImages: Boolean, $includeTranslations: Boolean, $synchronous: Boolean) {
  productDuplicate(productId: $productId, newTitle: $newTitle, newStatus: $newStatus, includeImages: $includeImages, includeTranslations: $includeTranslations, synchronous: $synchronous) {
    imageJob {
      id
    }
    newProduct {
      id
    }
    productDuplicateOperation {
      id
    }
    shop {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
