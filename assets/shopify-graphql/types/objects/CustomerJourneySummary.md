# Object: `CustomerJourneySummary`

A [`CustomerJourney`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney) through the online store leading up to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks session data, attribution sources, and the timeline from first visit to purchase conversion.

The summary includes the customer's position in their order history, days between first visit and order creation, and details about their first and last sessions. Use the [`moments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-moments) connection to access the complete timeline of customer interactions before the purchase.

## Fields

- `customerOrderIndex`: `Int` — The position of the current order within the customer's order history. Test orders aren't included.
- `daysToConversion`: `Int` — The number of days between the first session and the order creation date. The first session represents the first session since the last order, or the first session within the 30 day attribution window, if more than 30 days have passed since the last order.
- `firstVisit`: `CustomerVisit` — The customer's first session going into the shop.
- `lastVisit`: `CustomerVisit` — The last session before an order is made.
- `moments` `(first, after, last, before, reverse)`: `CustomerMomentConnection` — The events preceding a customer's order, such as shop sessions.
- `momentsCount`: `Count` — The total number of customer moments associated with this order. Returns null if the order is still in the process of being attributed.
- `ready`: `Boolean!` — Whether the attributed sessions for the order have been created yet.

## Related Types

- [Count](../../types/objects/Count.md)
- [CustomerVisit](../../types/objects/CustomerVisit.md)
