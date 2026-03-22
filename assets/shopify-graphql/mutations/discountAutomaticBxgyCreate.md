# Mutation: `discountAutomaticBxgyCreate`

**Returns:** `DiscountAutomaticBxgyCreatePayload`

Creates a
[buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
that's automatically applied on a cart and at checkout.

> Note:
> To create code discounts, use the
[`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)
mutation.

## Arguments

- **`automaticBxgyDiscount`**: `DiscountAutomaticBxgyInput!` — The input data used to create the automatic BXGY discount.

## Payload Fields

- `automaticDiscountNode`: `DiscountAutomaticNode` — The automatic discount that was created.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticBxgyCreatePayload](../types/objects/DiscountAutomaticBxgyCreatePayload.md)
- [DiscountAutomaticBxgyInput](../types/inputs/DiscountAutomaticBxgyInput.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticBxgyCreate($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
  discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
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
