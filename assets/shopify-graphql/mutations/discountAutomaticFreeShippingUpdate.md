# Mutation: `discountAutomaticFreeShippingUpdate`

**Returns:** `DiscountAutomaticFreeShippingUpdatePayload`

Updates existing automatic free shipping discounts, allowing merchants to modify promotion criteria, shipping destinations, and eligibility requirements without recreating the entire discount structure.

For example, extending a holiday free shipping promotion to include additional countries, adjusting the minimum order value threshold, or expanding customer eligibility to include new segments.

Use `DiscountAutomaticFreeShippingUpdate` to:
- Modify shipping discount thresholds and criteria
- Expand or restrict geographic availability
- Update customer targeting and eligibility rules
- Adjust promotion timing and activation periods

Changes take effect immediately for new orders, while the mutation validates all modifications and reports any configuration conflicts through user errors.

Learn more about [managing automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping).

## Arguments

- **`id`**: `ID!` — The ID of the automatic free shipping discount to update.
- **`freeShippingAutomaticDiscount`**: `DiscountAutomaticFreeShippingInput!` — The input data used to update the automatic free shipping discount.

## Payload Fields

- `automaticDiscountNode`: `DiscountAutomaticNode` — The automatic discount that was updated.
- `userErrors`: `[DiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DiscountAutomaticFreeShippingInput](../types/inputs/DiscountAutomaticFreeShippingInput.md)
- [DiscountAutomaticFreeShippingUpdatePayload](../types/objects/DiscountAutomaticFreeShippingUpdatePayload.md)
- [DiscountAutomaticNode](../types/objects/DiscountAutomaticNode.md)
- [DiscountUserError](../types/objects/DiscountUserError.md)

## Example Mutation

```graphql
mutation DiscountAutomaticFreeShippingUpdate($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
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
