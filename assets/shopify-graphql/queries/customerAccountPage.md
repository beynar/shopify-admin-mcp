# Query: `customerAccountPage`

**Returns:** `CustomerAccountPage`

Returns a `CustomerAccountPage` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `CustomerAccountPage` to return.

## Return Type Fields

- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `handle`: `String!` — A unique, human-friendly string for the customer account page.
- `id`: `ID!` — The unique ID for the customer account page.
- `title`: `String!` — The title of the customer account page.

## Related Types

- [CustomerAccountPage](../types/interfaces/CustomerAccountPage.md)

## Example Query

```graphql
query CustomerAccountPage($id: ID!) {
  customerAccountPage(id: $id) {
    defaultCursor
    handle
    title
  }
}
```
