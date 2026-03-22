# Interface: `CustomerAccountPage`

A customer account page.

**Implements:** `Navigable`, `Node`

## Fields

- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `handle`: `String!` — A unique, human-friendly string for the customer account page.
- `id`: `ID!` — The unique ID for the customer account page.
- `title`: `String!` — The title of the customer account page.

## Possible Types

- [CustomerAccountAppExtensionPage](../../types/objects/CustomerAccountAppExtensionPage.md)
- [CustomerAccountNativePage](../../types/objects/CustomerAccountNativePage.md)
