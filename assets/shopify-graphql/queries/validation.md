# Query: `validation`

**Returns:** `Validation`

Validation available on the shop.

## Arguments

- **`id`**: `ID!` — The ID of the validation.

## Return Type Fields

- `blockOnFailure`: `Boolean!` — Whether the validation should block on failures other than expected violations.
- `enabled`: `Boolean!` — Whether the validation is enabled on the merchant checkout.
- `errorHistory`: `FunctionsErrorHistory` — The error history on the most recent version of the validation function.
- `id`: `ID!` — Global ID for the validation.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `shopifyFunction`: `ShopifyFunction!` — The Shopify Function implementing the validation.
- `title`: `String!` — The merchant-facing validation name.

## Related Types

- [FunctionsErrorHistory](../types/objects/FunctionsErrorHistory.md)
- [Metafield](../types/objects/Metafield.md)
- [ShopifyFunction](../types/objects/ShopifyFunction.md)
- [Validation](../types/objects/Validation.md)

## Example Query

```graphql
query Validation($id: ID!) {
  validation(id: $id) {
    blockOnFailure
    enabled
    title
  }
}
```
