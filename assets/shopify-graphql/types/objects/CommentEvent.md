# Object: `CommentEvent`

A comment that staff members add to the timeline of [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer), [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company), [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation), or [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) objects. Staff use comments to document internal notes, communicate with team members, and track important information about these types.

The comment includes information like the [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) who authored it, when it was created, and whether it's editable or deletable. Comments can have file attachments and reference related objects like [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects through embeds.

**Implements:** `Event`, `Node`

## Fields

- `action`: `String!` — The action that occured.
- `appTitle`: `String` — The name of the app that created the event.
- `attachments`: `[CommentEventAttachment!]!` — The attachments associated with the comment event.
- `attributeToApp`: `Boolean!` — Whether the event was created by an app.
- `attributeToUser`: `Boolean!` — Whether the event was caused by an admin user.
- `author`: `StaffMember!` — The name of the user that authored the comment event.
- `canDelete`: `Boolean!` — Whether the comment event can be deleted. If true, then the comment event can be deleted.
- `canEdit`: `Boolean!` — Whether the comment event can be edited. If true, then the comment event can be edited.
- `createdAt`: `DateTime!` — The date and time when the event was created.
- `criticalAlert`: `Boolean!` — Whether the event is critical.
- `edited`: `Boolean!` — Whether the comment event has been edited. If true, then the comment event has been edited.
- `embed`: `CommentEventEmbed` — The object reference associated with the comment event. For example, a product or discount).
- `id`: `ID!` — A globally-unique ID.
- `message`: `FormattedString!` — Human readable text that describes the event.
- `rawMessage`: `String!` — The raw body of the comment event.
- `subject`: `CommentEventSubject` — The parent subject to which the comment event belongs.

## Related Types

- [CommentEventAttachment](../../types/objects/CommentEventAttachment.md)
- [CommentEventEmbed](../../types/unions/CommentEventEmbed.md)
- [CommentEventSubject](../../types/interfaces/CommentEventSubject.md)
- [StaffMember](../../types/objects/StaffMember.md)
