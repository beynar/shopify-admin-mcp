# Object: `SellingPlanGroup`

A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.

The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.

> Caution:
> Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

**Implements:** `HasPublishedTranslations`, `Node`

## Fields

- `appId`: `String` — The ID for app, exposed in Liquid and product JSON.
- `appliesToProduct` `(productId)`: `Boolean!` — Whether the given product is directly associated to the selling plan group.
- `appliesToProductVariant` `(productVariantId)`: `Boolean!` — Whether the given product variant is directly associated to the selling plan group.
- `appliesToProductVariants` `(productId)`: `Boolean!` — Whether any of the product variants of the given product are associated to the selling plan group.
- `createdAt`: `DateTime!` — The date and time when the selling plan group was created.
- `description`: `String` — The merchant-facing description of the selling plan group.
- `id`: `ID!` — A globally-unique ID.
- `merchantCode`: `String!` — The merchant-facing label of the selling plan group.
- `name`: `String!` — The buyer-facing label of the selling plan group.
- `options`: `[String!]!` — The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.
- `position`: `Int` — The relative position of the selling plan group for display.
- `productVariants` `(productId, first, after, last, before, reverse)`: `ProductVariantConnection!` — Product variants associated to the selling plan group.
- `productVariantsCount` `(productId)`: `Count` — A count of product variants associated to the selling plan group.
- `products` `(first, after, last, before, reverse)`: `ProductConnection!` — Products associated to the selling plan group.
- `productsCount`: `Count` — A count of products associated to the selling plan group.
- `sellingPlans` `(first, after, last, before, reverse)`: `SellingPlanConnection!` — Selling plans associated to the selling plan group.
- `summary`: `String` — A summary of the policies associated to the selling plan group.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.

## Related Types

- [Count](../../types/objects/Count.md)
- [Translation](../../types/objects/Translation.md)
