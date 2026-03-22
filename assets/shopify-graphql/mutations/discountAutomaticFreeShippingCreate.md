# Mutation: `discountAutomaticFreeShippingCreate`

**Returns:** `DiscountAutomaticFreeShippingCreatePayload`

Creates automatic free shipping discounts that apply to qualifying orders without requiring discount codes. These promotions automatically activate when customers meet specified criteria, streamlining the checkout experience.

For example, a store might create an automatic free shipping discount for orders over variable pricing to encourage larger purchases, or offer free shipping to specific customer segments during promotional periods.

Use `DiscountAutomaticFreeShippingCreate` to:
- Set up code-free shipping promotions
- Create order value-based shipping incentives
- Target specific customer groups with shipping benefits
- Establish location-based shipping discounts

The mutation validates discount configuration and returns the created automatic discount node along with any configuration errors that need resolution.

Learn more about [automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode).

## Arguments

- **`freeShippingAutomaticDiscount`**: `DiscountAutomaticFreeShippingInput!` — The input data used to create the automatic free shipping discount.

## Payload Fields

- `automaticDiscountNode`: `DiscountAutomaticNode` — The automatic free shipping discount that was created.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticFreeShippingCreatePayload](../types/objects/DiscountAutomaticFreeShippingCreatePayload.md)
- [DiscountAutomaticFreeShippingInput](../types/inputs/DiscountAutomaticFreeShippingInput.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticFreeShippingCreate($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
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
