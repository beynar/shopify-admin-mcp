# Mutation: `discountAutomaticDeactivate`

**Returns:** `DiscountAutomaticDeactivatePayload`

Deactivates an automatic discount.

## Arguments

- **`id`**: `ID!` — The ID of the automatic discount to deactivate.

## Payload Fields

- `automaticDiscountNode`: `DiscountAutomaticNode` — The deactivated automatic discount.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticDeactivatePayload](../types/objects/DiscountAutomaticDeactivatePayload.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticDeactivate($id: ID!) {
  discountAutomaticDeactivate(id: $id) {
    automaticDiscountNode {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
