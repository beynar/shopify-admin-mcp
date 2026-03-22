# Mutation: `productUnpublish`

**Returns:** `ProductUnpublishPayload`

Unpublishes a product.

## Arguments

- **`input`**: `ProductUnpublishInput!` — Specifies the product to unpublish and the channel to unpublish it from.

## Payload Fields

- `product`: `Product` — The product that has been unpublished.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductUnpublishInput](../types/inputs/ProductUnpublishInput.md)
- [ProductUnpublishPayload](../types/objects/ProductUnpublishPayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductUnpublish($input: ProductUnpublishInput!) {
  productUnpublish(input: $input) {
    product {
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
