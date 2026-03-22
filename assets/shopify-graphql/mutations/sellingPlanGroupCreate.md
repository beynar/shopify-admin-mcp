# Mutation: `sellingPlanGroupCreate`

**Returns:** `SellingPlanGroupCreatePayload`

Creates a selling plan group that defines how products can be sold and purchased. A selling plan group represents a selling method such as "Subscribe and save", "Pre-order", or "Try before you buy" and contains one or more selling plans with specific billing, delivery, and pricing policies.

Use the [`resources`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate#arguments-resources) argument to associate products or product variants with the group during creation. You can also add products later using [`sellingPlanGroupAddProducts`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts) or [`sellingPlanGroupAddProductVariants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants).

Learn more about [building selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan#step-1-create-a-selling-plan-group) or explore [examples of creating TBYB and other selling plan groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate?example=create-a-tbyb-selling-plan-group).

## Arguments

- **`input`**: `SellingPlanGroupInput!` — The properties of the new Selling Plan Group.
- **`resources`**: `SellingPlanGroupResourceInput` — The resources this Selling Plan Group should be applied to.

## Payload Fields

- `sellingPlanGroup`: `SellingPlanGroup` — The created selling plan group object.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SellingPlanGroup](../types/objects/SellingPlanGroup.md)
- [SellingPlanGroupCreatePayload](../types/objects/SellingPlanGroupCreatePayload.md)
- [SellingPlanGroupInput](../types/inputs/SellingPlanGroupInput.md)
- [SellingPlanGroupResourceInput](../types/inputs/SellingPlanGroupResourceInput.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation SellingPlanGroupCreate($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
  sellingPlanGroupCreate(input: $input, resources: $resources) {
    sellingPlanGroup {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
