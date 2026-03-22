# Mutation: `productVariantJoinSellingPlanGroups`

**Returns:** `ProductVariantJoinSellingPlanGroupsPayload`

Adds multiple selling plan groups to a product variant.

## Arguments

- **`id`**: `ID!` — The ID of the product variant.
- **`sellingPlanGroupIds`**: `[ID!]!` — The IDs of the selling plan groups to add.

## Payload Fields

- `productVariant`: `ProductVariant` — The product variant object.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductVariant](../types/objects/ProductVariant.md)
- [ProductVariantJoinSellingPlanGroupsPayload](../types/objects/ProductVariantJoinSellingPlanGroupsPayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation ProductVariantJoinSellingPlanGroups($id: ID!, $sellingPlanGroupIds: [ID!]!) {
  productVariantJoinSellingPlanGroups(id: $id, sellingPlanGroupIds: $sellingPlanGroupIds) {
    productVariant {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
