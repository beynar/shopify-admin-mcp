# Mutation: `discountAutomaticActivate`

**Returns:** `DiscountAutomaticActivatePayload`

Activates an automatic discount.

## Arguments

- **`id`**: `ID!` — The ID of the automatic discount to activate.

## Payload Fields

- `automaticDiscountNode`: `DiscountAutomaticNode` — The activated automatic discount.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticActivatePayload](../types/objects/DiscountAutomaticActivatePayload.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticActivate($id: ID!) {
  discountAutomaticActivate(id: $id) {
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
