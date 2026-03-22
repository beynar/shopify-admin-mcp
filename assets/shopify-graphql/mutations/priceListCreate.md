# Mutation: `priceListCreate`

**Returns:** `PriceListCreatePayload`

Creates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Price lists enable contextual pricing by defining fixed prices or percentage-based adjustments.

The price list requires a unique name, currency for fixed prices, and parent adjustment settings that determine how the system calculates prices relative to base prices. To apply contextual pricing, link the price list to a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). When that catalog's context is matched, customers receive the price list's prices.

Learn more about [building catalogs with price lists](https://shopify.dev/docs/apps/build/markets/build-catalog#step-2-associate-a-price-list-with-the-catalog).

## Arguments

- **`input`**: `PriceListCreateInput!` — The properties of the new price list.

## Payload Fields

- `priceList`: `PriceList` — The newly created price list.
- `userErrors`: `[PriceListUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceList](../types/objects/PriceList.md)
- [PriceListCreateInput](../types/inputs/PriceListCreateInput.md)
- [PriceListCreatePayload](../types/objects/PriceListCreatePayload.md)
- [PriceListUserError](../types/objects/PriceListUserError.md)

## Example Mutation

```graphql
mutation PriceListCreate($input: PriceListCreateInput!) {
  priceListCreate(input: $input) {
    priceList {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
