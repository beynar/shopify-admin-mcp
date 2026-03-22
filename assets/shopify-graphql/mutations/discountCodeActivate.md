# Mutation: `discountCodeActivate`

**Returns:** `DiscountCodeActivatePayload`

Activates a previously created code discount, making it available for customers to use during checkout. This mutation transitions inactive discount codes into an active state where they can be applied to orders.

For example, after creating a "SUMMER20" discount code but leaving it inactive during setup, merchants can activate it when ready to launch their summer promotion campaign.

Use `DiscountCodeActivate` to:
- Launch scheduled promotional campaigns
- Reactivate previously paused discount codes
- Enable discount codes after configuration changes
- Control the timing of discount availability

The mutation returns the updated discount code node with its new active status and handles any validation errors that might prevent activation, such as conflicting discount rules or invalid date ranges.

## Arguments

- **`id`**: `ID!` — The ID of the code discount to activate.

## Payload Fields

- `codeDiscountNode`: `DiscountCodeNode` — The activated code discount.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeActivatePayload](../types/objects/DiscountCodeActivatePayload.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeActivate($id: ID!) {
  discountCodeActivate(id: $id) {
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
