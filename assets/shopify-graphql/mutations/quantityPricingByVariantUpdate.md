# Mutation: `quantityPricingByVariantUpdate`

**Returns:** `QuantityPricingByVariantUpdatePayload`

Updates quantity pricing on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. You can set fixed prices (see [`PriceListPrice`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)), quantity rules, and quantity price breaks in a single operation.

[`QuantityRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule) objects define minimum, maximum, and increment constraints for ordering. [`QuantityPriceBreak`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak) objects offer tiered pricing based on purchase volume.

The mutation executes delete operations before create operations and doesn't allow partial updates.

> Note: If any requested change fails, then the mutation doesn't apply any of the changes.

## Arguments

- **`priceListId`**: `ID!` — The ID of the price list for which quantity pricing will be updated.
- **`input`**: `QuantityPricingByVariantUpdateInput!` — The input data used to update the quantity pricing in the price list.

## Payload Fields

- `productVariants`: `[ProductVariant!]` — The variants for which quantity pricing was created successfully in the price list.
- `userErrors`: `[QuantityPricingByVariantUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductVariant](../types/objects/ProductVariant.md)
- [QuantityPricingByVariantUpdateInput](../types/inputs/QuantityPricingByVariantUpdateInput.md)
- [QuantityPricingByVariantUpdatePayload](../types/objects/QuantityPricingByVariantUpdatePayload.md)
- [QuantityPricingByVariantUserError](../types/objects/QuantityPricingByVariantUserError.md)

## Example Mutation

```graphql
mutation QuantityPricingByVariantUpdate($priceListId: ID!, $input: QuantityPricingByVariantUpdateInput!) {
  quantityPricingByVariantUpdate(priceListId: $priceListId, input: $input) {
    productVariants {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
