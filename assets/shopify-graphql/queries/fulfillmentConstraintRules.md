# Query: `fulfillmentConstraintRules`

**Returns:** `[FulfillmentConstraintRule!]!`

The fulfillment constraint rules that belong to a shop.

## Return Type Fields

- `deliveryMethodTypes`: `[DeliveryMethodType!]!` — Delivery method types that the function is associated with.
- `function`: `ShopifyFunction!` — The ID for the fulfillment constraint function.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)

## Related Types

- [DeliveryMethodType](../types/enums/DeliveryMethodType.md)
- [FulfillmentConstraintRule](../types/objects/FulfillmentConstraintRule.md)
- [Metafield](../types/objects/Metafield.md)
- [ShopifyFunction](../types/objects/ShopifyFunction.md)

## Example Query

```graphql
query {
  fulfillmentConstraintRules {
  }
}
```
