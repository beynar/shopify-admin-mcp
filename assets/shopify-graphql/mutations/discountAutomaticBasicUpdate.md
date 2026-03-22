# Mutation: `discountAutomaticBasicUpdate`

**Returns:** `DiscountAutomaticBasicUpdatePayload`

Updates an existing
[amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
that's automatically applied on a cart and at checkout.

> Note:
> To update code discounts, use the
[`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)
mutation instead.

## Arguments

- **`id`**: `ID!` — The ID of the automatic amount off discount to update.
- **`automaticBasicDiscount`**: `DiscountAutomaticBasicInput!` — The input data used to update the automatic amount off discount.

## Payload Fields

- `automaticDiscountNode`: `DiscountAutomaticNode` — The automatic discount that was updated.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticBasicInput](../types/inputs/DiscountAutomaticBasicInput.md)
- [DiscountAutomaticBasicUpdatePayload](../types/objects/DiscountAutomaticBasicUpdatePayload.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticBasicUpdate($id: ID!, $automaticBasicDiscount: DiscountAutomaticBasicInput!) {
  discountAutomaticBasicUpdate(id: $id, automaticBasicDiscount: $automaticBasicDiscount) {
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
