# Mutation: `productCreate`

**Returns:** `ProductCreatePayload`

Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
with attributes such as title, description, vendor, and media.

The `productCreate` mutation helps you create many products at once, avoiding the tedious or time-consuming
process of adding them one by one in the Shopify admin. Common examples include creating products for a
new collection, launching a new product line, or adding seasonal products.

You can define product
[options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and
[values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue),
allowing you to create products with different variations like sizes or colors. You can also associate media
files to your products, including images and videos.

The `productCreate` mutation only supports creating a product with its initial
[product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).
To create multiple product variants for a single product and manage prices, use the
[`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
mutation.

> Note:
> The `productCreate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits)
> that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than
> 1,000 new product variants can be created per day.

After you create a product, you can make subsequent edits to the product using one of the following mutations:

- [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish):
Used to publish the product and make it available to customers. The `productCreate` mutation creates products
in an unpublished state by default, so you must perform a separate operation to publish the product.
- [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate):
Used to update a single product, such as changing the product's title, description, vendor, or associated media.
- [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet):
Used to perform multiple operations on products, such as creating or modifying product options and variants.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model)
and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

## Arguments

- **`product`**: `ProductCreateInput` — The attributes of the new product.
- **`media`**: `[CreateMediaInput!]` — The media to add to the product.

## Payload Fields

- `product`: `Product` — The product object.
- `shop`: `Shop!` — The shop associated with the product.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CreateMediaInput](../types/inputs/CreateMediaInput.md)
- [Product](../types/objects/Product.md)
- [ProductCreateInput](../types/inputs/ProductCreateInput.md)
- [ProductCreatePayload](../types/objects/ProductCreatePayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductCreate($product: ProductCreateInput, $media: [CreateMediaInput!]) {
  productCreate(product: $product, media: $media) {
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
