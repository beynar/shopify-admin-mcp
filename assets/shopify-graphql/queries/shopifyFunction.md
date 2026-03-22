# Query: `shopifyFunction`

**Returns:** `ShopifyFunction`

Returns a Shopify Function by its ID.
[Functions](https://shopify.dev/apps/build/functions)
enable you to customize Shopify's backend logic at defined parts of the commerce loop.

## Arguments

- **`id`**: `String!` — The ID of the Shopify Function.

## Return Type Fields

- `apiType`: `String!` — The API type of the Shopify Function.
- `apiVersion`: `String!` — The API version of the Shopify Function.
- `app`: `App!` — The app that owns the Shopify Function.
- `appBridge`: `FunctionsAppBridge!` — The App Bridge information for the Shopify Function.
- `appKey`: `String!` — The client ID of the app that owns the Shopify Function.
- `description`: `String` — The description of the Shopify Function.
- `handle`: `String!` — The handle of the Shopify Function.
- `id`: `String!` — The ID of the Shopify Function.
- `inputQuery`: `String` — The input query of the Shopify Function.
- `title`: `String!` — The title of the Shopify Function.
- `useCreationUi`: `Boolean!` — If the Shopify Function uses the creation UI in the Admin.

## Related Types

- [App](../types/objects/App.md)
- [FunctionsAppBridge](../types/objects/FunctionsAppBridge.md)
- [ShopifyFunction](../types/objects/ShopifyFunction.md)

## Example Query

```graphql
query ShopifyFunction($id: String!) {
  shopifyFunction(id: $id) {
    id
    apiType
    apiVersion
    appKey
    description
    handle
  }
}
```
