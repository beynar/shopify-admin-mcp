# Object: `OrderApp`

Identifies the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created an order. Common sources include "online store" for web purchases, "Point of Sale" for in-person sales, or custom app names for orders created through third-party integrations.

Use this information to track order attribution, analyze sales channels, and route orders to appropriate fulfillment workflows based on their source.

## Fields

- `icon`: `Image!` — The application icon.
- `id`: `ID!` — The application ID.
- `name`: `String!` — The name of the application.

## Related Types

- [Image](../../types/objects/Image.md)
