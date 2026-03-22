# Object: `LineItemGroup`

The information for [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) that are part of a bundle. When a bundle is purchased, each component line item references its [`LineItemGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup) through the [`lineItemGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-lineItemGroup) field to maintain the relationship with the bundle.

The parent bundle's product, variant, and custom attributes enable apps to group and display bundle components in order management systems, transactional emails, and other contexts where understanding the bundle structure is needed.

Learn more about [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).

**Implements:** `Node`

## Fields

- `customAttributes`: `[Attribute!]!` — A list of attributes that represent custom features or special requests.
- `id`: `ID!` — A globally-unique ID.
- `productId`: `ID` — ID of the product of the line item group.
- `quantity`: `Int!` — Quantity of the line item group on the order.
- `title`: `String!` — Title of the line item group.
- `variantId`: `ID` — ID of the variant of the line item group.
- `variantSku`: `String` — SKU of the variant of the line item group.

## Related Types

- [Attribute](../../types/objects/Attribute.md)
