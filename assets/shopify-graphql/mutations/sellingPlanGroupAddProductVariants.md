# Mutation: `sellingPlanGroupAddProductVariants`

**Returns:** `SellingPlanGroupAddProductVariantsPayload`

Adds multiple product variants to a selling plan group.

## Arguments

- **`id`**: `ID!` — The ID of the selling plan group.
- **`productVariantIds`**: `[ID!]!` — The IDs of the product variants to add.

## Payload Fields

- `sellingPlanGroup`: `SellingPlanGroup` — The updated selling plan group.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SellingPlanGroup](../types/objects/SellingPlanGroup.md)
- [SellingPlanGroupAddProductVariantsPayload](../types/objects/SellingPlanGroupAddProductVariantsPayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation SellingPlanGroupAddProductVariants($id: ID!, $productVariantIds: [ID!]!) {
  sellingPlanGroupAddProductVariants(id: $id, productVariantIds: $productVariantIds) {
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
