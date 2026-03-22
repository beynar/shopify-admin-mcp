# Object: `Abandonment`

Tracks a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s incomplete shopping journey, whether they abandoned while browsing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), adding items to cart, or during checkout. Provides data about the customer's behavior and products they interacted with.

The abandonment includes fields that indicate whether the customer has completed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [draft orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) after the abandonment occurred. It also tracks when emails were sent and how long since the customer's last activity across different abandonment types.

**Implements:** `Node`

## Fields

- `abandonedCheckoutPayload`: `AbandonedCheckout` — The abandonment payload for the abandoned checkout.
- `abandonmentType`: `AbandonmentAbandonmentType!` — The abandonment type.
- `app`: `App!` — The app associated with an abandoned checkout.
- `cartUrl`: `URL` — Permalink to the cart page.
- `createdAt`: `DateTime!` — The date and time when the abandonment was created.
- `customer`: `Customer!` — The customer who abandoned this event.
- `customerHasNoDraftOrderSinceAbandonment`: `Boolean!` — Whether the customer has a draft order since this abandonment has been abandoned.
- `customerHasNoOrderSinceAbandonment`: `Boolean!` — Whether the customer has completed an order since this checkout has been abandoned.
- `daysSinceLastAbandonmentEmail`: `Int!` — The number of days since the last abandonment email was sent to the customer.
- `emailSentAt`: `DateTime` — When the email was sent, if that's the case.
- `emailState`: `AbandonmentEmailState` — The email state (e.g., sent or not sent).
- `hoursSinceLastAbandonedCheckout`: `Float` — The number of hours since the customer has last abandoned a checkout.
- `id`: `ID!` — A globally-unique ID.
- `inventoryAvailable`: `Boolean!` — Whether the products in abandonment are available.
- `isFromCustomStorefront`: `Boolean!` — Whether the abandonment event comes from a custom storefront channel.
- `isFromOnlineStore`: `Boolean!` — Whether the abandonment event comes from the Online Store sales channel.
- `isFromShopApp`: `Boolean!` — Whether the abandonment event comes from the Shop app sales channel.
- `isFromShopPay`: `Boolean!` — Whether the abandonment event comes from Shop Pay.
- `isMostSignificantAbandonment`: `Boolean!` — Whether the customer didn't complete another most significant step since this abandonment.
- `lastBrowseAbandonmentDate`: `DateTime!` — The date for the latest browse abandonment.
- `lastCartAbandonmentDate`: `DateTime!` — The date for the latest cart abandonment.
- `lastCheckoutAbandonmentDate`: `DateTime!` — The date for the latest checkout abandonment.
- `mostRecentStep`: `AbandonmentAbandonmentType!` — The most recent step type.
- `productsAddedToCart` `(first, after, last, before, reverse)`: `CustomerVisitProductInfoConnection!` — The products added to the cart during the customer abandoned visit.
- `productsViewed` `(first, after, last, before, reverse)`: `CustomerVisitProductInfoConnection!` — The products viewed during the customer abandoned visit.
- `visitStartedAt`: `DateTime` — The date and time when the visit started.

## Related Types

- [AbandonedCheckout](../../types/objects/AbandonedCheckout.md)
- [AbandonmentAbandonmentType](../../types/enums/AbandonmentAbandonmentType.md)
- [AbandonmentEmailState](../../types/enums/AbandonmentEmailState.md)
- [App](../../types/objects/App.md)
- [Customer](../../types/objects/Customer.md)
