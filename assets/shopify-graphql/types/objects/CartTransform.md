# Object: `CartTransform`

A deployed cart transformation function that actively modifies how products appear and behave in customer carts. Cart transforms enable sophisticated merchandising strategies by programmatically merging, expanding, or updating cart line items based on custom business logic.

Use the `CartTransform` object to:
- Monitor active bundling and cart modification logic
- Track transform function deployment status and configuration
- Manage error handling behavior for cart processing failures
- Coordinate multiple transforms when running complex merchandising strategies
- Analyze transform performance and customer interaction patterns

Each cart transform links to a specific [Shopify Function](https://shopify.dev/docs/apps/build/functions) that contains the actual cart modification logic. The `blockOnFailure` setting determines whether cart processing should halt when the transform encounters errors, or whether it should allow customers to proceed with unmodified carts. This flexibility ensures merchants can balance feature richness with checkout reliability.

Transform functions operate during cart updates, product additions, and checkout initiation, providing multiple touchpoints to enhance the shopping experience. They integrate seamlessly with existing cart APIs while extending functionality beyond standard product catalog capabilities.

The function ID connects to your deployed function code, while the configuration settings control how the transform behaves in different scenarios. Multiple transforms can work together, processing cart modifications in sequence to support complex merchandising workflows.

Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle), and about the [Cart Transform Function API](https://shopify.dev/docs/api/functions/latest/cart-transform).

**Implements:** `HasMetafields`, `Node`

## Fields

- `blockOnFailure`: `Boolean!` — Whether a run failure will block cart and checkout operations.
- `functionId`: `String!` — The ID for the Cart Transform function.
- `id`: `ID!` — A globally-unique ID.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)

## Related Types

- [Metafield](../../types/objects/Metafield.md)
