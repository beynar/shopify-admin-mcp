# Object: `PriceList`

A list that defines pricing for [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). Price lists override default product prices with either fixed prices or percentage-based adjustments.

Each price list associates with a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) to determine which customers see the pricing. The catalog's context rules control when the price list applies, such as for specific markets, company locations, or apps.

Learn how to [support different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

**Implements:** `Node`

## Fields

- `catalog`: `Catalog` — The catalog that the price list is associated with.
- `currency`: `CurrencyCode!` — The currency for fixed prices associated with this price list.
- `fixedPricesCount`: `Int!` — The number of fixed prices on the price list.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The unique name of the price list, used as a human-readable identifier.
- `parent`: `PriceListParent` — Relative adjustments to other prices.
- `prices` `(originType, first, after, last, before, reverse, query)`: `PriceListPriceConnection!` — A list of prices associated with the price list.
- `quantityRules` `(originType, first, after, last, before, reverse)`: `QuantityRuleConnection!` — A list of quantity rules associated with the price list, ordered by product variants.

## Related Types

- [Catalog](../../types/interfaces/Catalog.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [PriceListParent](../../types/objects/PriceListParent.md)
- [PriceListPriceOriginType](../../types/enums/PriceListPriceOriginType.md)
- [QuantityRuleOriginType](../../types/enums/QuantityRuleOriginType.md)
