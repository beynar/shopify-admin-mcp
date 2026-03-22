# Object: `FulfillmentConstraintRule`

A fulfillment constraint rule.

**Implements:** `HasMetafields`, `Node`

## Fields

- `deliveryMethodTypes`: `[DeliveryMethodType!]!` — Delivery method types that the function is associated with.
- `function`: `ShopifyFunction!` — The ID for the fulfillment constraint function.
- `id`: `ID!` — A globally-unique ID.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)

## Related Types

- [DeliveryMethodType](../../types/enums/DeliveryMethodType.md)
- [Metafield](../../types/objects/Metafield.md)
- [ShopifyFunction](../../types/objects/ShopifyFunction.md)
