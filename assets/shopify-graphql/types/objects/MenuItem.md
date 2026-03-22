# Object: `MenuItem`

Individual navigation links that make up store menus, giving customers clickable paths to explore the store. Menu items are the building blocks that connect shoppers to products, collections, pages, or external resources.

For example, within a "Products" menu, individual menu items might link to specific collections like "Summer Collection" or "Best Sellers," each with its own title, URL, and resource connection.

Use the `MenuItem` object to:
- Define individual navigation links and their destinations
- Create nested menu hierarchies through item relationships
- Use tags for collection filtering
- Connect menu links to specific store resources

Menu items support various link types, enabling connections to internal store content or external websites. The nested items capability allows for dropdown or multi-level navigation structures that help organize complex store catalogs.

## Fields

- `id`: `ID!` — A globally-unique ID of the navigation menu item.
- `items`: `[MenuItem!]!` — List of the menu items nested under this item sorted by position.
- `resourceId`: `ID` — The ID of the resource to link to.
- `tags`: `[String!]!` — The menu item's tags to filter a collection.
- `title`: `String!` — The menu item's title.
- `type`: `MenuItemType!` — The menu item's type.
- `url`: `String` — The menu item's url.

## Related Types

- [MenuItemType](../../types/enums/MenuItemType.md)
