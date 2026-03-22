# Object: `CustomerAccountNativePage`

A native page for the customer account navigation menu.

**Implements:** `CustomerAccountPage`, `Navigable`, `Node`

## Fields

- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `handle`: `String!` — A unique, human-friendly string for the customer account page.
- `id`: `ID!` — The unique ID for the customer account page.
- `pageType`: `CustomerAccountNativePagePageType!` — The type of customer account native page.
- `title`: `String!` — The title of the customer account page.

## Related Types

- [CustomerAccountNativePagePageType](../../types/enums/CustomerAccountNativePagePageType.md)
