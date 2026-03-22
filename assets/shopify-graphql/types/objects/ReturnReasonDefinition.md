# Object: `ReturnReasonDefinition`

A standardized reason for returning an item.

- Shopify offers an expanded library of return reasons available to all merchants
- For each product, Shopify suggests a curated subset of reasons based on the product's category
- Suggested reasons aren't the only valid options. When creating a return via the API, you can use any reason from the [full library](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions).

**Implements:** `Node`

## Fields

- `deleted`: `Boolean!` — Whether the return reason has been removed from taxonomy.
- `handle`: `String!` — A unique, human-readable, stable identifier for the return reason.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The localized, user-facing name of the return reason.
