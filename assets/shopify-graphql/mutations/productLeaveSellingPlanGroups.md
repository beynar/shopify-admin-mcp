# Mutation: `productLeaveSellingPlanGroups`

**Returns:** `ProductLeaveSellingPlanGroupsPayload`

Removes multiple groups from a product.

## Arguments

- **`id`**: `ID!` — The ID of the product.
- **`sellingPlanGroupIds`**: `[ID!]!` — The IDs of the selling plan groups to add.

## Payload Fields

- `product`: `Product` — The product object.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductLeaveSellingPlanGroupsPayload](../types/objects/ProductLeaveSellingPlanGroupsPayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation ProductLeaveSellingPlanGroups($id: ID!, $sellingPlanGroupIds: [ID!]!) {
  productLeaveSellingPlanGroups(id: $id, sellingPlanGroupIds: $sellingPlanGroupIds) {
    product {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
