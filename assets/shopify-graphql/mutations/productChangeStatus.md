# Mutation: `productChangeStatus`

**Returns:** `ProductChangeStatusPayload`

Changes the status of a product. This allows you to set the availability of the product across all channels.

## Arguments

- **`productId`**: `ID!` — The ID of the product.
- **`status`**: `ProductStatus!` — The status to be assigned to the product.

## Payload Fields

- `product`: `Product` — The product object.
- `userErrors`: `[ProductChangeStatusUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductChangeStatusPayload](../types/objects/ProductChangeStatusPayload.md)
- [ProductChangeStatusUserError](../types/objects/ProductChangeStatusUserError.md)
- [ProductStatus](../types/enums/ProductStatus.md)

## Example Mutation

```graphql
mutation ProductChangeStatus($productId: ID!, $status: ProductStatus!) {
  productChangeStatus(productId: $productId, status: $status) {
    product {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
