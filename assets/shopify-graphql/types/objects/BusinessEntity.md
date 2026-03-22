# Object: `BusinessEntity`

A legal entity through which a merchant operates. Each business entity contains its own [`BusinessEntityAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntityAddress), company information, and can be associated with its own [`ShopifyPaymentsAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount). [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) objects can be assigned to a business entity to determine payment processing and [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) attribution.

Every shop must have one primary business entity. Additional entities enable international operations by establishing legal presence in multiple countries.

Learn more about [managing multiple legal entities](https://shopify.dev/docs/apps/build/markets/multiple-entities).

**Implements:** `Node`

## Fields

- `address`: `BusinessEntityAddress!` — The address of the merchant's Business Entity.
- `archived`: `Boolean!` — Whether the Business Entity is archived from the shop.
- `companyName`: `String` — The name of the company associated with the merchant's Business Entity.
- `displayName`: `String!` — The display name of the merchant's Business Entity.
- `id`: `ID!` — A globally-unique ID.
- `primary`: `Boolean!` — Whether it's the merchant's primary Business Entity.
- `shopifyPaymentsAccount`: `ShopifyPaymentsAccount` — Returns the Shopify Payments account information for the shop. Includes current balances across all currencies, payout schedules, and bank account configurations.

## Related Types

- [BusinessEntityAddress](../../types/objects/BusinessEntityAddress.md)
- [ShopifyPaymentsAccount](../../types/objects/ShopifyPaymentsAccount.md)
