# Query: `paymentCustomization`

**Returns:** `PaymentCustomization`

The payment customization.

## Arguments

- **`id`**: `ID!` — The ID of the payment customization.

## Return Type Fields

- `enabled`: `Boolean!` — The enabled status of the payment customization.
- `errorHistory`: `FunctionsErrorHistory` — The error history on the most recent version of the payment customization.
- `functionId`: `String!` — The ID of the Shopify Function implementing the payment customization.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `shopifyFunction`: `ShopifyFunction!` — The Shopify Function implementing the payment customization.
- `title`: `String!` — The title of the payment customization.

## Related Types

- [FunctionsErrorHistory](../types/objects/FunctionsErrorHistory.md)
- [Metafield](../types/objects/Metafield.md)
- [PaymentCustomization](../types/objects/PaymentCustomization.md)
- [ShopifyFunction](../types/objects/ShopifyFunction.md)

## Example Query

```graphql
query PaymentCustomization($id: ID!) {
  paymentCustomization(id: $id) {
    enabled
    functionId
    title
  }
}
```
