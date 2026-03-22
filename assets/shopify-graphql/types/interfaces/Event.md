# Interface: `Event`

Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the
addition of a product.

## Fields

- `action`: `String!` — The action that occured.
- `appTitle`: `String` — The name of the app that created the event.
- `attributeToApp`: `Boolean!` — Whether the event was created by an app.
- `attributeToUser`: `Boolean!` — Whether the event was caused by an admin user.
- `createdAt`: `DateTime!` — The date and time when the event was created.
- `criticalAlert`: `Boolean!` — Whether the event is critical.
- `id`: `ID!` — A globally-unique ID.
- `message`: `FormattedString!` — Human readable text that describes the event.

## Possible Types

- [BasicEvent](../../types/objects/BasicEvent.md)
- [CommentEvent](../../types/objects/CommentEvent.md)
