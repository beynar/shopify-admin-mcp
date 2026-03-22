# Mutation: `discountAutomaticBxgyUpdate`

**Returns:** `DiscountAutomaticBxgyUpdatePayload`

Updates an existing
[buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
that's automatically applied on a cart and at checkout.

> Note:
> To update code discounts, use the
[`discountCodeBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)
mutation instead.

## Arguments

- **`id`**: `ID!` — The ID of the automatic BXGY discount to update.
- **`automaticBxgyDiscount`**: `DiscountAutomaticBxgyInput!` — The input data used to update the automatic BXGY discount.

## Payload Fields

- `automaticDiscountNode`: `DiscountAutomaticNode` — The automatic discount that was updated.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticBxgyInput](../types/inputs/DiscountAutomaticBxgyInput.md)
- [DiscountAutomaticBxgyUpdatePayload](../types/objects/DiscountAutomaticBxgyUpdatePayload.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticBxgyUpdate($id: ID!, $automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
  discountAutomaticBxgyUpdate(id: $id, automaticBxgyDiscount: $automaticBxgyDiscount) {
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
