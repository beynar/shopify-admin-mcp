# Mutation: `priceListFixedPricesUpdate`

**Returns:** `PriceListFixedPricesUpdatePayload`

Updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). This mutation lets you add new fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and remove existing prices in a single operation.

Use this mutation to modify variant pricing on a price list by providing prices to add and variant IDs to delete.

Learn more about [setting fixed prices for product variants](https://shopify.dev/docs/apps/build/markets/build-catalog#step-3-set-fixed-prices-for-specific-product-variants).

## Arguments

- **`priceListId`**: `ID!` — The price list that the prices will be updated against.
- **`pricesToAdd`**: `[PriceListPriceInput!]!` — The fixed prices to add.
- **`variantIdsToDelete`**: `[ID!]!` — A list of product variant IDs to remove from the price list.

## Payload Fields

- `deletedFixedPriceVariantIds`: `[ID!]` — A list of deleted variant IDs for prices.
- `priceList`: `PriceList` — The price list for which the fixed prices were modified.
- `pricesAdded`: `[PriceListPrice!]` — The prices that were added to the price list.
- `userErrors`: `[PriceListPriceUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceList](../types/objects/PriceList.md)
- [PriceListFixedPricesUpdatePayload](../types/objects/PriceListFixedPricesUpdatePayload.md)
- [PriceListPrice](../types/objects/PriceListPrice.md)
- [PriceListPriceInput](../types/inputs/PriceListPriceInput.md)
- [PriceListPriceUserError](../types/objects/PriceListPriceUserError.md)

## Example Mutation

```graphql
mutation PriceListFixedPricesUpdate($priceListId: ID!, $pricesToAdd: [PriceListPriceInput!]!, $variantIdsToDelete: [ID!]!) {
  priceListFixedPricesUpdate(priceListId: $priceListId, pricesToAdd: $pricesToAdd, variantIdsToDelete: $variantIdsToDelete) {
    deletedFixedPriceVariantIds
    priceList {
      id
    }
    pricesAdded {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
