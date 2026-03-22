# Object: `AdditionalFee`

Additional fees applied to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) beyond the standard product and shipping costs. Additional fees typically include duties, import fees, or other special handling charges that need separate tracking from regular [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects.

Each fee includes its name, price in both shop and presentment currencies, and any applicable taxes broken down by [`TaxLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine).

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the additional fee.
- `price`: `MoneyBag!` — The price of the additional fee.
- `taxLines`: `[TaxLine!]!` — A list of taxes charged on the additional fee.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [TaxLine](../../types/objects/TaxLine.md)
