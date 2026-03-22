# Object: `Validation`

A server-side validation that enforces business rules before customers complete their purchases. Each validation links to a [`ShopifyFunction`](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) that implements the validation logic.

Validations run on Shopify's servers and are enforced throughout the checkout process. Validation errors always block checkout progress. The `blockOnFailure` setting determines whether runtime exceptions, like timeouts, also block checkout. Tracks runtime exception history for the validation function and supports custom data through [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

**Implements:** `HasMetafieldDefinitions`, `HasMetafields`, `Node`

## Fields

- `blockOnFailure`: `Boolean!` — Whether the validation should block on failures other than expected violations.
- `enabled`: `Boolean!` — Whether the validation is enabled on the merchant checkout.
- `errorHistory`: `FunctionsErrorHistory` — The error history on the most recent version of the validation function.
- `id`: `ID!` — Global ID for the validation.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `shopifyFunction`: `ShopifyFunction!` — The Shopify Function implementing the validation.
- `title`: `String!` — The merchant-facing validation name.

## Related Types

- [FunctionsErrorHistory](../../types/objects/FunctionsErrorHistory.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [ShopifyFunction](../../types/objects/ShopifyFunction.md)
