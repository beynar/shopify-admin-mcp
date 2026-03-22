# Query: `sellingPlanGroup`

**Returns:** `SellingPlanGroup`

Returns a `SellingPlanGroup` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `SellingPlanGroup` to return.

## Return Type Fields

- `appId`: `String` — The ID for app, exposed in Liquid and product JSON.
- `appliesToProduct`: `Boolean!` — Whether the given product is directly associated to the selling plan group.
- `appliesToProductVariant`: `Boolean!` — Whether the given product variant is directly associated to the selling plan group.
- `appliesToProductVariants`: `Boolean!` — Whether any of the product variants of the given product are associated to the selling plan group.
- `createdAt`: `DateTime!` — The date and time when the selling plan group was created.
- `description`: `String` — The merchant-facing description of the selling plan group.
- `id`: `ID!` — A globally-unique ID.
- `merchantCode`: `String!` — The merchant-facing label of the selling plan group.
- `name`: `String!` — The buyer-facing label of the selling plan group.
- `options`: `[String!]!` — The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.
- `position`: `Int` — The relative position of the selling plan group for display.
- `productVariants`: `ProductVariantConnection!` — Product variants associated to the selling plan group.
- `productVariantsCount`: `Count` — A count of product variants associated to the selling plan group.
- `products`: `ProductConnection!` — Products associated to the selling plan group.
- `productsCount`: `Count` — A count of products associated to the selling plan group.
- `sellingPlans`: `SellingPlanConnection!` — Selling plans associated to the selling plan group.
- `summary`: `String` — A summary of the policies associated to the selling plan group.
- `translations`: `[Translation!]!` — The published translations associated with the resource.

## Related Types

- [Count](../types/objects/Count.md)
- [SellingPlanGroup](../types/objects/SellingPlanGroup.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query SellingPlanGroup($id: ID!) {
  sellingPlanGroup(id: $id) {
    id
    appId
    appliesToProduct
    appliesToProductVariant
    appliesToProductVariants
    createdAt
  }
}
```
