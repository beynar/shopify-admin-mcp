# Mutation: `sellingPlanGroupRemoveProductVariants`

**Returns:** `SellingPlanGroupRemoveProductVariantsPayload`

Removes multiple product variants from a selling plan group.

## Arguments

- **`id`**: `ID!` — The ID of the selling plan group.
- **`productVariantIds`**: `[ID!]!` — The IDs of the product variants to remove.

## Payload Fields

- `removedProductVariantIds`: `[ID!]` — The removed product variant ids.
- `userErrors`: `[SellingPlanGroupUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SellingPlanGroupRemoveProductVariantsPayload](../types/objects/SellingPlanGroupRemoveProductVariantsPayload.md)
- [SellingPlanGroupUserError](../types/objects/SellingPlanGroupUserError.md)

## Example Mutation

```graphql
mutation SellingPlanGroupRemoveProductVariants($id: ID!, $productVariantIds: [ID!]!) {
  sellingPlanGroupRemoveProductVariants(id: $id, productVariantIds: $productVariantIds) {
    removedProductVariantIds
    userErrors {
      field
      message
    }
  }
}
```
