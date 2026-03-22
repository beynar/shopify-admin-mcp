# Mutation: `discountCodeBxgyCreate`

**Returns:** `DiscountCodeBxgyCreatePayload`

Creates a
[buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
that's applied on a cart and at checkout when a customer enters a code.

> Note:
> To create discounts that are automatically applied on a cart and at checkout, use the
[`discountAutomaticBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)
mutation.

## Arguments

- **`bxgyCodeDiscount`**: `DiscountCodeBxgyInput!` — The input data used to create the BXGY code discount.

## Payload Fields

- `codeDiscountNode`: `DiscountCodeNode` — The code discount that was created.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeBxgyCreatePayload](../types/objects/DiscountCodeBxgyCreatePayload.md)
- [DiscountCodeBxgyInput](../types/inputs/DiscountCodeBxgyInput.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeBxgyCreate($bxgyCodeDiscount: DiscountCodeBxgyInput!) {
  discountCodeBxgyCreate(bxgyCodeDiscount: $bxgyCodeDiscount) {
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
