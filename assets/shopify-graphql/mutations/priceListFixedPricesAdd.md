# Mutation: `priceListFixedPricesAdd`

**Returns:** `PriceListFixedPricesAddPayload`

Creates or updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Use this mutation to set specific prices for [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that override the price list's default percentage-based adjustments.

When you add fixed prices, the mutation replaces any existing fixed prices for those variants on the price list.

## Arguments

- **`priceListId`**: `ID!` — The ID of the price list to which the fixed prices will be added or updated.
- **`prices`**: `[PriceListPriceInput!]!` — The list of fixed prices to add or update in the price list.

## Payload Fields

- `prices`: `[PriceListPrice!]` — The list of fixed prices that were added to or updated in the price list.
- `userErrors`: `[PriceListPriceUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceListFixedPricesAddPayload](../types/objects/PriceListFixedPricesAddPayload.md)
- [PriceListPrice](../types/objects/PriceListPrice.md)
- [PriceListPriceInput](../types/inputs/PriceListPriceInput.md)
- [PriceListPriceUserError](../types/objects/PriceListPriceUserError.md)

## Example Mutation

```graphql
mutation PriceListFixedPricesAdd($priceListId: ID!, $prices: [PriceListPriceInput!]!) {
  priceListFixedPricesAdd(priceListId: $priceListId, prices: $prices) {
    prices {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
