# Query: `priceList`

**Returns:** `PriceList`

Returns a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) by ID. You can use price lists to specify either fixed prices or adjusted relative prices that override initial [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) prices.

Price lists enable contextual pricing for the [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) they are associated to. Each price list can define fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or percentage-based adjustments relative to other prices.

## Arguments

- **`id`**: `ID!` — The ID of the `PriceList` to return.

## Return Type Fields

- `catalog`: `Catalog` — The catalog that the price list is associated with.
- `currency`: `CurrencyCode!` — The currency for fixed prices associated with this price list.
- `fixedPricesCount`: `Int!` — The number of fixed prices on the price list.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The unique name of the price list, used as a human-readable identifier.
- `parent`: `PriceListParent` — Relative adjustments to other prices.
- `prices`: `PriceListPriceConnection!` — A list of prices associated with the price list.
- `quantityRules`: `QuantityRuleConnection!` — A list of quantity rules associated with the price list, ordered by product variants.

## Related Types

- [Catalog](../types/interfaces/Catalog.md)
- [CurrencyCode](../types/enums/CurrencyCode.md)
- [PriceList](../types/objects/PriceList.md)
- [PriceListParent](../types/objects/PriceListParent.md)

## Example Query

```graphql
query PriceList($id: ID!) {
  priceList(id: $id) {
    fixedPricesCount
    name
  }
}
```
