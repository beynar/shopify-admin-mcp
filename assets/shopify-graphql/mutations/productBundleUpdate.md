# Mutation: `productBundleUpdate`

**Returns:** `ProductBundleUpdatePayload`

Updates a product bundle or componentized product.

## Arguments

- **`input`**: `ProductBundleUpdateInput!` — Input for updating a product bundle or componentized product.

## Payload Fields

- `productBundleOperation`: `ProductBundleOperation` — The asynchronous ProductBundleOperation updating the product bundle or componentized product.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductBundleOperation](../types/objects/ProductBundleOperation.md)
- [ProductBundleUpdateInput](../types/inputs/ProductBundleUpdateInput.md)
- [ProductBundleUpdatePayload](../types/objects/ProductBundleUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductBundleUpdate($input: ProductBundleUpdateInput!) {
  productBundleUpdate(input: $input) {
    productBundleOperation {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
