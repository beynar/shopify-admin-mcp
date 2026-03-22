# Mutation: `menuUpdate`

**Returns:** `MenuUpdatePayload`

Updates a [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for display on the storefront. Modifies the menu's title and navigation structure, including nested [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects. You can update the handle for non-default menus.

The items argument accepts a list of menu items with their nested structure. Each item can include nested items to create multi-level navigation hierarchies. Default menus have restricted updates—you can't change their handles.

## Arguments

- **`id`**: `ID!` — ID of the menu to be updated.
- **`title`**: `String!` — The menu's title.
- **`handle`**: `String` — The menu's handle.
- **`items`**: `[MenuItemUpdateInput!]!` — List of the menu's items.

## Payload Fields

- `menu`: `Menu` — The updated menu.
- `userErrors`: `[MenuUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Menu](../types/objects/Menu.md)
- [MenuItemUpdateInput](../types/inputs/MenuItemUpdateInput.md)
- [MenuUpdatePayload](../types/objects/MenuUpdatePayload.md)
- [MenuUpdateUserError](../types/objects/MenuUpdateUserError.md)

## Example Mutation

```graphql
mutation MenuUpdate($id: ID!, $title: String!, $handle: String, $items: [MenuItemUpdateInput!]!) {
  menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
