# Mutation: `quantityRulesDelete`

**Returns:** `QuantityRulesDeletePayload`

Deletes specific quantity rules from a price list using a product variant ID.
You can use the `quantityRulesDelete` mutation to delete a set of quantity rules from a price list.

## Arguments

- **`priceListId`**: `ID!` — The ID of the price list from which the quantity rules will be deleted.
- **`variantIds`**: `[ID!]!` — A list of product variant IDs whose quantity rules will be removed from the price list.

## Payload Fields

- `deletedQuantityRulesVariantIds`: `[ID!]` — A list of product variant IDs whose quantity rules were removed from the price list.
- `userErrors`: `[QuantityRuleUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [QuantityRuleUserError](../types/objects/QuantityRuleUserError.md)
- [QuantityRulesDeletePayload](../types/objects/QuantityRulesDeletePayload.md)

## Example Mutation

```graphql
mutation QuantityRulesDelete($priceListId: ID!, $variantIds: [ID!]!) {
  quantityRulesDelete(priceListId: $priceListId, variantIds: $variantIds) {
    deletedQuantityRulesVariantIds
    userErrors {
      field
      message
    }
  }
}
```
