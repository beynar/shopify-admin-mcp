# Input Object: `MetafieldDefinitionConstraintsUpdatesInput`

The input fields required to update metafield definition [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions).
Each constraint applies a metafield definition to a subtype of a resource.

## Input Fields

- `key`: `String` — The category of resource subtypes that the definition applies to.
- `values`: `[MetafieldDefinitionConstraintValueUpdateInput!]` — The specific constraint subtype values to create or delete.

## Related Types

- [MetafieldDefinitionConstraintValueUpdateInput](../../types/inputs/MetafieldDefinitionConstraintValueUpdateInput.md)
