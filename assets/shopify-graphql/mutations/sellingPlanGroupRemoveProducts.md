# Mutation: `sellingPlanGroupRemoveProducts`

**Returns:** `SellingPlanGroupRemoveProductsPayload`

Removes multiple products from a selling plan group.

## Arguments

- **`id`**: `ID!` — The ID of the selling plan group.
- **`productIds`**: `[ID!]!` — The IDs of the products to remove.

## Payload Fields

- `removedProductIds`: `[ID!]` — The removed product ids.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SellingPlanGroupRemoveProductsPayload](../types/objects/SellingPlanGroupRemoveProductsPayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation SellingPlanGroupRemoveProducts($id: ID!, $productIds: [ID!]!) {
  sellingPlanGroupRemoveProducts(id: $id, productIds: $productIds) {
    removedProductIds
    userErrors {
      field
      message
    }
  }
}
```
