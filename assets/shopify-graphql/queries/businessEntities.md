# Query: `businessEntities`

**Returns:** `[BusinessEntity!]!`

Returns the list of [business entities](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity) associated with the shop. Use this query to retrieve business entities for assigning to markets, managing payment providers per entity, or viewing entity attribution on orders.

Each shop can have multiple business entities with one designated as primary. To identify the primary entity in the query results, set the [`primary`](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessEntities#returns-BusinessEntity.fields.primary) field to `true`.

Learn more about [managing multiple legal entities](https://shopify.dev/docs/apps/build/markets/multiple-entities).

## Return Type Fields

- `address`: `BusinessEntityAddress!` — The address of the merchant's Business Entity.
- `archived`: `Boolean!` — Whether the Business Entity is archived from the shop.
- `companyName`: `String` — The name of the company associated with the merchant's Business Entity.
- `displayName`: `String!` — The display name of the merchant's Business Entity.
- `id`: `ID!` — A globally-unique ID.
- `primary`: `Boolean!` — Whether it's the merchant's primary Business Entity.
- `shopifyPaymentsAccount`: `ShopifyPaymentsAccount` — Returns the Shopify Payments account information for the shop. Includes current balances across all currencies, payout schedules, and bank account configurations.

## Related Types

- [BusinessEntity](../types/objects/BusinessEntity.md)
- [BusinessEntityAddress](../types/objects/BusinessEntityAddress.md)
- [ShopifyPaymentsAccount](../types/objects/ShopifyPaymentsAccount.md)

## Example Query

```graphql
query {
  businessEntities {
    archived
    companyName
    displayName
    primary
  }
}
```
