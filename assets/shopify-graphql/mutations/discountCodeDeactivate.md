# Mutation: `discountCodeDeactivate`

**Returns:** `DiscountCodeDeactivatePayload`

Temporarily suspends a code discount without permanently removing it from the store. Deactivation allows merchants to pause promotional campaigns while preserving the discount configuration for potential future use.

For example, when a flash sale needs to end immediately or a discount code requires temporary suspension due to inventory issues, merchants can deactivate it to stop new redemptions while keeping the discount structure intact.

Use `DiscountCodeDeactivate` to:
- Pause active promotional campaigns timely
- Temporarily suspend problematic discount codes
- Control discount availability during inventory shortages
- Maintain discount history while stopping usage

Deactivated discounts remain in the system and can be reactivated later, unlike deletion which persistently removes the code. Customers attempting to use deactivated codes will receive appropriate error messages.

## Arguments

- **`id`**: `ID!` — The ID of the code discount to deactivate.

## Payload Fields

- `codeDiscountNode`: `DiscountCodeNode` — The deactivated code discount.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeDeactivatePayload](../types/objects/DiscountCodeDeactivatePayload.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeDeactivate($id: ID!) {
  discountCodeDeactivate(id: $id) {
    codeDiscountNode {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
