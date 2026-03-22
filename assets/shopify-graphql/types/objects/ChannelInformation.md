# Object: `ChannelInformation`

Identifies the [sales channel](https://shopify.dev/docs/apps/build/sales-channels) and [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from which an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) originated. Provides attribution details such as the specific platform (Facebook Marketplace, Instagram Shopping) or marketplace where the order was placed.

Links to the app that manages the channel and optional [`ChannelDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition) details that specify the exact sub-channel or selling surface.

**Implements:** `Node`

## Fields

- `app`: `App!` — The app associated with the channel.
- `channelDefinition`: `ChannelDefinition` — The channel definition associated with the channel.
- `channelId`: `ID!` — The unique ID for the channel.
- `displayName`: `String` — The publishing destination display name or channel name.
- `id`: `ID!` — A globally-unique ID.

## Related Types

- [App](../../types/objects/App.md)
- [ChannelDefinition](../../types/objects/ChannelDefinition.md)
