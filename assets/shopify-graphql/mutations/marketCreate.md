# Mutation: `marketCreate`

**Returns:** `MarketCreatePayload`

Creates a [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) to deliver customized shopping experiences. Markets define various aspects of the buyer experience including pricing, product availability, custom content, inventory and fulfillment priorities, and payment methods.

Define conditions to match buyers by region, company location, retail location, or other criteria. Configure [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings) to control currency behavior. Set [`MarketPriceInclusions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions) to determine tax and duty display. Assign [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects and [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) configurations to control product availability and SEO strategy.

Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

## Arguments

- **`input`**: `MarketCreateInput!` — The properties of the new market.

## Payload Fields

- `market`: `Market` — The market object.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../types/objects/Market.md)
- [MarketCreateInput](../types/inputs/MarketCreateInput.md)
- [MarketCreatePayload](../types/objects/MarketCreatePayload.md)
- [MarketUserError](../types/objects/MarketUserError.md)

## Example Mutation

```graphql
mutation MarketCreate($input: MarketCreateInput!) {
  marketCreate(input: $input) {
    market {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
