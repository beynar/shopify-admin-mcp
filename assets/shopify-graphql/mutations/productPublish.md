# Mutation: `productPublish`

**Returns:** `ProductPublishPayload`

Publishes a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) to specified [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) objects.

Products sold exclusively on subscription (`requiresSellingPlan: true`) can only be published to online stores.

## Arguments

- **`input`**: `ProductPublishInput!` — Specifies the product to publish and the channels to publish it to.

## Payload Fields

- `product`: `Product` — The product that has been published.
- `productPublications`: `[ProductPublication!]` — The channels where the product is published.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductPublication](../types/objects/ProductPublication.md)
- [ProductPublishInput](../types/inputs/ProductPublishInput.md)
- [ProductPublishPayload](../types/objects/ProductPublishPayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductPublish($input: ProductPublishInput!) {
  productPublish(input: $input) {
    product {
      id
    }
    productPublications {
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
