# Query: `menu`

**Returns:** `Menu`

Returns a `Menu` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `Menu` to return.

## Return Type Fields

- `handle`: `String!` — The menu's handle.
- `id`: `ID!` — A globally-unique ID.
- `isDefault`: `Boolean!` — Whether the menu is a default. The handle for default menus can't be updated and default menus can't be deleted.
- `items`: `[MenuItem!]!` — A list of items on the menu sorted by position.
- `title`: `String!` — The menu's title.
- `translations`: `[Translation!]!` — The published translations associated with the resource.

## Related Types

- [Menu](../types/objects/Menu.md)
- [MenuItem](../types/objects/MenuItem.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query Menu($id: ID!) {
  menu(id: $id) {
    handle
    isDefault
    title
  }
}
```
