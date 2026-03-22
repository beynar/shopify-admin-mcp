# Query: `deliveryCustomization`

**Returns:** `DeliveryCustomization`

The delivery customization.

## Arguments

- **`id`**: `ID!` — The ID of the delivery customization.

## Return Type Fields

- `enabled`: `Boolean!` — The enabled status of the delivery customization.
- `errorHistory`: `FunctionsErrorHistory` — The error history on the most recent version of the delivery customization.
- `functionId`: `String!` — The ID of the Shopify Function implementing the delivery customization.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `shopifyFunction`: `ShopifyFunction!` — The Shopify Function implementing the delivery customization.
- `title`: `String!` — The title of the delivery customization.

## Related Types

- [DeliveryCustomization](../types/objects/DeliveryCustomization.md)
- [FunctionsErrorHistory](../types/objects/FunctionsErrorHistory.md)
- [Metafield](../types/objects/Metafield.md)
- [ShopifyFunction](../types/objects/ShopifyFunction.md)

## Example Query

```graphql
query DeliveryCustomization($id: ID!) {
  deliveryCustomization(id: $id) {
    enabled
    functionId
    title
  }
}
```
