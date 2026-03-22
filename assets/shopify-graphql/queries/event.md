# Query: `event`

**Returns:** `Event`

Retrieves a single event by ID. Events chronicle activities in your store such as resource creation, updates, or staff comments. The query returns an [`Event`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event) interface of type [`BasicEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent) or [`CommentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent).

## Arguments

- **`id`**: `ID!` — The ID of the event.

## Return Type Fields

- `action`: `String!` — The action that occured.
- `appTitle`: `String` — The name of the app that created the event.
- `attributeToApp`: `Boolean!` — Whether the event was created by an app.
- `attributeToUser`: `Boolean!` — Whether the event was caused by an admin user.
- `createdAt`: `DateTime!` — The date and time when the event was created.
- `criticalAlert`: `Boolean!` — Whether the event is critical.
- `id`: `ID!` — A globally-unique ID.
- `message`: `FormattedString!` — Human readable text that describes the event.

## Related Types

- [Event](../types/interfaces/Event.md)

## Example Query

```graphql
query Event($id: ID!) {
  event(id: $id) {
    id
    action
    appTitle
    attributeToApp
    attributeToUser
    createdAt
  }
}
```
