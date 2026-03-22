# Mutation: `productJoinSellingPlanGroups`

**Returns:** `ProductJoinSellingPlanGroupsPayload`

Adds multiple selling plan groups to a product.

## Arguments

- **`id`**: `ID!` — The ID of the product.
- **`sellingPlanGroupIds`**: `[ID!]!` — The IDs of the selling plan groups to add.

## Payload Fields

- `product`: `Product` — The product object.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductJoinSellingPlanGroupsPayload](../types/objects/ProductJoinSellingPlanGroupsPayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation ProductJoinSellingPlanGroups($id: ID!, $sellingPlanGroupIds: [ID!]!) {
  productJoinSellingPlanGroups(id: $id, sellingPlanGroupIds: $sellingPlanGroupIds) {
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
