# Mutation: `priceListFixedPricesByProductUpdate`

**Returns:** `PriceListFixedPricesByProductUpdatePayload`

Sets or removes fixed prices for all variants of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Simplifies pricing management when all variants of a product should have the same price on a price list, rather than setting individual variant prices.

When you add a fixed price for a product, all its [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects receive the same price on the price list. When you remove a product's fixed prices, all variant prices revert to the price list's adjustment rules.

## Arguments

- **`pricesToAdd`**: `[PriceListProductPriceInput!]` — A list of `PriceListProductPriceInput` that identifies which products to update the fixed prices for.
- **`pricesToDeleteByProductIds`**: `[ID!]` — A list of product IDs that identifies which products to remove the fixed prices for.
- **`priceListId`**: `ID!` — The price list to update the prices for.

## Payload Fields

- `priceList`: `PriceList` — The price list for which the fixed prices were modified.
- `pricesToAddProducts`: `[Product!]` — The product for which the fixed prices were added.
- `pricesToDeleteProducts`: `[Product!]` — The product for which the fixed prices were deleted.
- `userErrors`: `[PriceListFixedPricesByProductBulkUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceList](../types/objects/PriceList.md)
- [PriceListFixedPricesByProductBulkUpdateUserError](../types/objects/PriceListFixedPricesByProductBulkUpdateUserError.md)
- [PriceListFixedPricesByProductUpdatePayload](../types/objects/PriceListFixedPricesByProductUpdatePayload.md)
- [PriceListProductPriceInput](../types/inputs/PriceListProductPriceInput.md)
- [Product](../types/objects/Product.md)

## Example Mutation

```graphql
mutation PriceListFixedPricesByProductUpdate($pricesToAdd: [PriceListProductPriceInput!], $pricesToDeleteByProductIds: [ID!], $priceListId: ID!) {
  priceListFixedPricesByProductUpdate(pricesToAdd: $pricesToAdd, pricesToDeleteByProductIds: $pricesToDeleteByProductIds, priceListId: $priceListId) {
    priceList {
      id
    }
    pricesToAddProducts {
      id
    }
    pricesToDeleteProducts {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
