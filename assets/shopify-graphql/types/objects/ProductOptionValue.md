# Object: `ProductOptionValue`

A specific value for a [`ProductOption`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as "Red" or "Blue" for a "Color" option. Each value can be assigned to [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects to create different versions of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).

The value tracks whether any variants currently use it through the [`hasVariants`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-hasVariants) field. Values can include visual representations through swatches that display colors or images. When linked to a [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield), the [`linkedMetafieldValue`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-linkedMetafieldValue) provides additional structured data for the option value.

**Implements:** `HasPublishedTranslations`, `Node`

## Fields

- `hasVariants`: `Boolean!` — Whether the product option value has any linked variants.
- `id`: `ID!` — A globally-unique ID.
- `linkedMetafieldValue`: `String` — The value of the linked metafield.
- `name`: `String!` — The name of the product option value.
- `swatch`: `ProductOptionValueSwatch` — The swatch associated with the product option value.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.

## Related Types

- [ProductOptionValueSwatch](../../types/objects/ProductOptionValueSwatch.md)
- [Translation](../../types/objects/Translation.md)
