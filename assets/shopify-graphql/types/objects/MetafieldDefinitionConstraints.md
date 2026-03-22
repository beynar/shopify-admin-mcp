# Object: `MetafieldDefinitionConstraints`

The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions)
that determine what subtypes of resources a metafield definition applies to.

## Fields

- `key`: `String` — The category of resource subtypes that the definition applies to.
- `values` `(first, after, last, before, reverse)`: `MetafieldDefinitionConstraintValueConnection!` — The specific constraint subtype values that the definition applies to.
