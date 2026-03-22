# Mutation: `discountCodeBasicCreate`

**Returns:** `DiscountCodeBasicCreatePayload`

Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

> Note:
> To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate) mutation.

## Arguments

- **`basicCodeDiscount`**: `DiscountCodeBasicInput!` — The input data used to create the discount code.

## Payload Fields

- `codeDiscountNode`: `DiscountCodeNode` — The discount code that was created.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountCodeBasicCreatePayload](../types/objects/DiscountCodeBasicCreatePayload.md)
- [DiscountCodeBasicInput](../types/inputs/DiscountCodeBasicInput.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
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
