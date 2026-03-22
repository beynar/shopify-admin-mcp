# Mutation: `discountCodeFreeShippingUpdate`

**Returns:** `DiscountCodeFreeShippingUpdatePayload`

Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

> Note:
> To update a free shipping discount that's automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate) mutation.

## Arguments

- **`id`**: `ID!` — The ID of the discount code to update.
- **`freeShippingCodeDiscount`**: `DiscountCodeFreeShippingInput!` — The input data used to update the discount code.

## Payload Fields

- `codeDiscountNode`: `DiscountCodeNode` — The discount code that was updated.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeFreeShippingInput](../types/inputs/DiscountCodeFreeShippingInput.md)
- [DiscountCodeFreeShippingUpdatePayload](../types/objects/DiscountCodeFreeShippingUpdatePayload.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeFreeShippingUpdate($id: ID!, $freeShippingCodeDiscount: DiscountCodeFreeShippingInput!) {
  discountCodeFreeShippingUpdate(id: $id, freeShippingCodeDiscount: $freeShippingCodeDiscount) {
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
