# Mutation: `discountAutomaticBasicCreate`

**Returns:** `DiscountAutomaticBasicCreatePayload`

Creates an
[amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
that's automatically applied on a cart and at checkout.

> Note:
> To create code discounts, use the
[`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)
mutation.

## Arguments

- **`automaticBasicDiscount`**: `DiscountAutomaticBasicInput!` — The input data used to create the automatic amount off discount.

## Payload Fields

- `automaticDiscountNode`: `DiscountAutomaticNode` — The automatic discount that was created.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticBasicCreatePayload](../types/objects/DiscountAutomaticBasicCreatePayload.md)
- [DiscountAutomaticBasicInput](../types/inputs/DiscountAutomaticBasicInput.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
  discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
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
