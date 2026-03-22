# Mutation: `discountCodeBxgyUpdate`

**Returns:** `DiscountCodeBxgyUpdatePayload`

Updates a
[buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
that's applied on a cart and at checkout when a customer enters a code.

> Note:
> To update discounts that are automatically applied on a cart and at checkout, use the
[`discountAutomaticBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)
mutation.

## Arguments

- **`id`**: `ID!` — The ID of the BXGY code discount to update.
- **`bxgyCodeDiscount`**: `DiscountCodeBxgyInput!` — The input data used to update the BXGY code discount.

## Payload Fields

- `codeDiscountNode`: `DiscountCodeNode` — The code discount that was updated.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeBxgyInput](../types/inputs/DiscountCodeBxgyInput.md)
- [DiscountCodeBxgyUpdatePayload](../types/objects/DiscountCodeBxgyUpdatePayload.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
  discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
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
