# Object: `TaxonomyChoiceListAttribute`

A Shopify product taxonomy choice list attribute.

**Implements:** `Node`

## Fields

- `id`: `ID!` — The unique ID of the TaxonomyAttribute.
- `name`: `String!` — The name of the product taxonomy attribute. For example, Color.
- `values` `(first, after, last, before)`: `TaxonomyValueConnection!` — A list of values on the choice list attribute.
