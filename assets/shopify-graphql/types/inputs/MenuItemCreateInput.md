# Input Object: `MenuItemCreateInput`

The input fields required to create a valid menu item.

## Input Fields

- `title`: `String!` — The menu item's title.
- `type`: `MenuItemType!` — The menu item's type.
- `resourceId`: `ID` — The menu item's association with an existing resource.
- `url`: `String` — The menu item's url to be used when the item doesn't point to a resource.
- `tags`: `[String!]` — The menu item's tags to filter a collection.
- `items`: `[MenuItemCreateInput!]` — List of the menu items nested under this item sorted by position.

## Related Types

- [MenuItemType](../../types/enums/MenuItemType.md)
