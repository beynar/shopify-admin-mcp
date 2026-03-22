# Object: `CustomerJourney`

Tracks a customer's path to purchase through their online store visits. The journey captures key moments like shop sessions that led to the order, helping merchants understand customer behavior and marketing attribution within a 30-day window. Includes the first and last sessions before an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), the time between initial visit and conversion, and the customer's order position in their purchase history.

## Fields

- `customerOrderIndex`: `Int!` — The position of the current order within the customer's order history.
- `daysToConversion`: `Int!` — The amount of days between first session and order creation date. First session represents first session since the last order, or first session within the 30 day attribution window, if more than 30 days has passed since the last order.
- `firstVisit`: `CustomerVisit!` — The customer's first session going into the shop.
- `lastVisit`: `CustomerVisit` — The last session before an order is made.
- `moments`: `[CustomerMoment!]!` — Events preceding a customer order, such as shop sessions.

## Related Types

- [CustomerMoment](../../types/interfaces/CustomerMoment.md)
- [CustomerVisit](../../types/objects/CustomerVisit.md)
