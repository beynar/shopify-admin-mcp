# Mutation: `productVariantLeaveSellingPlanGroups`

**Returns:** `ProductVariantLeaveSellingPlanGroupsPayload`

Remove multiple groups from a product variant.

## Arguments

- **`id`**: `ID!` — The ID of the product variant.
- **`sellingPlanGroupIds`**: `[ID!]!` — The IDs of the selling plan groups to leave.

## Payload Fields

- `productVariant`: `ProductVariant` — The product variant object.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductVariant](../types/objects/ProductVariant.md)
- [ProductVariantLeaveSellingPlanGroupsPayload](../types/objects/ProductVariantLeaveSellingPlanGroupsPayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation ProductVariantLeaveSellingPlanGroups($id: ID!, $sellingPlanGroupIds: [ID!]!) {
  productVariantLeaveSellingPlanGroups(id: $id, sellingPlanGroupIds: $sellingPlanGroupIds) {
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
