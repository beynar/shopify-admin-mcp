# Mutation: `discountCodeBasicUpdate`

**Returns:** `DiscountCodeBasicUpdatePayload`

Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

> Note:
> To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate) mutation.

## Arguments

- **`id`**: `ID!` — The ID of the discount code to update.
- **`basicCodeDiscount`**: `DiscountCodeBasicInput!` — The input data used to update the discount code.

## Payload Fields

- `codeDiscountNode`: `DiscountCodeNode` — The discount code that was updated.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeBasicInput](../types/inputs/DiscountCodeBasicInput.md)
- [DiscountCodeBasicUpdatePayload](../types/objects/DiscountCodeBasicUpdatePayload.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
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
