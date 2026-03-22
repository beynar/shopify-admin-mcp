# Object: `Segment`

A group of [customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) that meet specific criteria defined through [ShopifyQL query](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference) conditions. Common use cases for segments include customer analytics, targeted marketing campaigns, and automated discount eligibility.

The segment's [`query`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-query) field contains ShopifyQL conditions that determine membership, such as purchase history, location, or engagement patterns. Tracks when the segment was created with [`creationDate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-creationDate) and when it was last modified with [`lastEditDate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment#field-lastEditDate).

**Implements:** `Node`

## Fields

- `creationDate`: `DateTime!` — The date and time when the segment was added to the store.
- `id`: `ID!` — A globally-unique ID.
- `lastEditDate`: `DateTime!` — The date and time when the segment was last updated.
- `name`: `String!` — The name of the segment.
- `query`: `String!` — A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers.
