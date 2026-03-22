# Mutation: `menuCreate`

**Returns:** `MenuCreatePayload`

Creates a navigation [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for the online store. Menus organize links that help customers navigate to [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [pages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page), [blogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog), and custom URLs.

Each menu requires a unique handle for identification and can contain multiple [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects with nested sub-items up to three levels deep.

## Arguments

- **`title`**: `String!` — The menu's title.
- **`handle`**: `String!` — The menu's handle.
- **`items`**: `[MenuItemCreateInput!]!` — List of the menu's items.

## Payload Fields

- `menu`: `Menu` — The created menu.
- `userErrors`: `[MenuCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Menu](../types/objects/Menu.md)
- [MenuCreatePayload](../types/objects/MenuCreatePayload.md)
- [MenuCreateUserError](../types/objects/MenuCreateUserError.md)
- [MenuItemCreateInput](../types/inputs/MenuItemCreateInput.md)

## Example Mutation

```graphql
mutation MenuCreate($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
  menuCreate(title: $title, handle: $handle, items: $items) {
    menu {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
