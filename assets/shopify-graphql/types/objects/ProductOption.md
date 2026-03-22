# Object: `ProductOption`

A product attribute that customers can choose from, such as "Size", "Color", or "Material". [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects use options to define the different variations available for purchase. Each option has a name and a set of possible values that combine to create [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

The option includes its display position, associated values, and optional [`LinkedMetafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LinkedMetafield) for structured data. Options support translations for international selling and track which [`ProductOptionValue`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) objects that variants actively use versus unused values that exist without associated variants.

**Implements:** `HasPublishedTranslations`, `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `linkedMetafield`: `LinkedMetafield` — The metafield identifier linked to this option.
- `name`: `String!` — The product option’s name.
- `optionValues`: `[ProductOptionValue!]!` — Similar to values, option_values returns all the corresponding option value objects to the product option, including values not assigned to any variants.
- `position`: `Int!` — The product option's position.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `values`: `[String!]!` — The corresponding value to the product option name.

## Related Types

- [LinkedMetafield](../../types/objects/LinkedMetafield.md)
- [ProductOptionValue](../../types/objects/ProductOptionValue.md)
- [Translation](../../types/objects/Translation.md)
