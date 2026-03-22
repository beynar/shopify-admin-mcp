# Query: `businessEntity`

**Returns:** `BusinessEntity`

Returns a Business Entity by ID.

## Arguments

- **`id`**: `ID` — The ID of the Business Entity to return. Returns the primary Business Entity if not provided.

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
query BusinessEntity($id: ID) {
  businessEntity(id: $id) {
    archived
    companyName
    displayName
    primary
  }
}
```
