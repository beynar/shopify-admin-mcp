# Object: `ChannelDefinition`

A specific selling surface within a [sales channel](https://shopify.dev/docs/apps/build/sales-channels) platform. A channel definition identifies where products can be sold. Definitions can represent entire platforms (like Facebook or TikTok) or specific sales channels within those platforms, such as Instagram Shops, Instagram Shopping, or TikTok Live.

Each definition includes the parent [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) name and subchannel name to indicate the selling surface hierarchy. The marketplace flag identifies whether this surface represents a marketplace channel such as shops on Facebook, Instagram, or Buy on Google.

**Implements:** `Node`

## Fields

- `channelName`: `String!` — Name of the channel that this sub channel belongs to.
- `handle`: `String!` — Unique string used as a public identifier for the channel definition.
- `id`: `ID!` — The unique ID for the channel definition.
- `isMarketplace`: `Boolean!` — Whether this channel definition represents a marketplace.
- `subChannelName`: `String!` — Name of the sub channel (e.g. Online Store, Instagram Shopping, TikTok Live).
- `svgIcon`: `String` *(deprecated)* — Icon displayed when showing the channel in admin.
