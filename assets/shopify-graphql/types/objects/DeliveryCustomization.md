# Object: `DeliveryCustomization`

A delivery customization.

**Implements:** `HasMetafieldDefinitions`, `HasMetafields`, `Node`

## Fields

- `enabled`: `Boolean!` — The enabled status of the delivery customization.
- `errorHistory`: `FunctionsErrorHistory` — The error history on the most recent version of the delivery customization.
- `functionId`: `String!` — The ID of the Shopify Function implementing the delivery customization.
- `id`: `ID!` — A globally-unique ID.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `shopifyFunction`: `ShopifyFunction!` — The Shopify Function implementing the delivery customization.
- `title`: `String!` — The title of the delivery customization.

## Related Types

- [FunctionsErrorHistory](../../types/objects/FunctionsErrorHistory.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [ShopifyFunction](../../types/objects/ShopifyFunction.md)
