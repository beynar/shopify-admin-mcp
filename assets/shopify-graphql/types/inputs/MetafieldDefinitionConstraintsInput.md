# Input Object: `MetafieldDefinitionConstraintsInput`

The input fields required to create metafield definition [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions).
Each constraint applies a metafield definition to a subtype of a resource.

## Input Fields

- `key`: `String!` — The category of resource subtypes that the definition applies to.
- `values`: `[String!]!` — The specific constraint subtype values that the definition applies to.
