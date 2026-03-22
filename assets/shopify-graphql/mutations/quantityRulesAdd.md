# Mutation: `quantityRulesAdd`

**Returns:** `QuantityRulesAddPayload`

Creates or updates existing quantity rules on a price list.
You can use the `quantityRulesAdd` mutation to set order level minimums, maximumums and increments for specific product variants.

## Arguments

- **`priceListId`**: `ID!` — The ID of the price list to which the quantity rules will be added or updated.
- **`quantityRules`**: `[QuantityRuleInput!]!` — The list of quantity rules to add or update in the price list.

## Payload Fields

- `quantityRules`: `[QuantityRule!]` — The list of quantity rules that were added to or updated in the price list.
- `userErrors`: `[QuantityRuleUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [QuantityRule](../types/objects/QuantityRule.md)
- [QuantityRuleInput](../types/inputs/QuantityRuleInput.md)
- [QuantityRuleUserError](../types/objects/QuantityRuleUserError.md)
- [QuantityRulesAddPayload](../types/objects/QuantityRulesAddPayload.md)

## Example Mutation

```graphql
mutation QuantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
  quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
    quantityRules {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
