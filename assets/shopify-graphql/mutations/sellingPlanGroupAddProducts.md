# Mutation: `sellingPlanGroupAddProducts`

**Returns:** `SellingPlanGroupAddProductsPayload`

Adds multiple products to a selling plan group.

## Arguments

- **`id`**: `ID!` — The ID of the selling plan group.
- **`productIds`**: `[ID!]!` — The IDs of the products to add.

## Payload Fields

- `sellingPlanGroup`: `SellingPlanGroup` — The updated selling plan group.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SellingPlanGroup](../types/objects/SellingPlanGroup.md)
- [SellingPlanGroupAddProductsPayload](../types/objects/SellingPlanGroupAddProductsPayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation SellingPlanGroupAddProducts($id: ID!, $productIds: [ID!]!) {
  sellingPlanGroupAddProducts(id: $id, productIds: $productIds) {
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
