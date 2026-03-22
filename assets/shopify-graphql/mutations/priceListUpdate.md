# Mutation: `priceListUpdate`

**Returns:** `PriceListUpdatePayload`

Updates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)'s configuration, including its name, currency, [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) association, and pricing adjustments.

Changing the currency removes all fixed prices from the price list. The affected [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects revert to prices calculated from the price list's adjustment settings.

## Arguments

- **`id`**: `ID!` — The ID of the price list to update.
- **`input`**: `PriceListUpdateInput!` — The input data used to update the price list.

## Payload Fields

- `priceList`: `PriceList` — The updated price list.
- `userErrors`: `[PriceListUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PriceList](../types/objects/PriceList.md)
- [PriceListUpdateInput](../types/inputs/PriceListUpdateInput.md)
- [PriceListUpdatePayload](../types/objects/PriceListUpdatePayload.md)
- [PriceListUserError](../types/objects/PriceListUserError.md)

## Example Mutation

```graphql
mutation PriceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
  priceListUpdate(id: $id, input: $input) {
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
