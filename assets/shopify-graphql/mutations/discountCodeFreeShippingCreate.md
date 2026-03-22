# Mutation: `discountCodeFreeShippingCreate`

**Returns:** `DiscountCodeFreeShippingCreatePayload`

Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

> Note:
> To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate) mutation.

## Arguments

- **`freeShippingCodeDiscount`**: `DiscountCodeFreeShippingInput!` — The input data used to create the discount code.

## Payload Fields

- `codeDiscountNode`: `DiscountCodeNode` — The discount code that was created.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeFreeShippingCreatePayload](../types/objects/DiscountCodeFreeShippingCreatePayload.md)
- [DiscountCodeFreeShippingInput](../types/inputs/DiscountCodeFreeShippingInput.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeFreeShippingCreate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
  discountCodeFreeShippingCreate(freeShippingCodeDiscount: $freeShippingCodeDiscount) {
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
