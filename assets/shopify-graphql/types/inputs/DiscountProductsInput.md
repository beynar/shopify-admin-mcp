# Input Object: `DiscountProductsInput`

The input fields for adding and removing
[products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and
[product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant)
as prerequisites or as eligible items for a discount.

## Input Fields

- `productsToAdd`: `[ID!]` — The IDs of the products to add as prerequisites or as eligible items for a discount.
- `productsToRemove`: `[ID!]` — The IDs of the products to remove as prerequisites or as eligible items for a discount.
- `productVariantsToAdd`: `[ID!]` — The IDs of the product variants to add as prerequisites or as eligible items for a discount.
- `productVariantsToRemove`: `[ID!]` — The IDs of the product variants to remove as prerequisites or as eligible items for a discount.
