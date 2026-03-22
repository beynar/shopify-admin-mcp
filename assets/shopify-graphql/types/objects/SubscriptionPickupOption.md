# Object: `SubscriptionPickupOption`

A pickup option to deliver a subscription contract.

## Fields

- `code`: `String!` — The code of the pickup option.
- `description`: `String` — The description of the pickup option.
- `location`: `Location!` — The pickup location.
- `phoneRequired`: `Boolean!` — Whether a phone number is required for the pickup option.
- `pickupTime`: `String!` — The estimated amount of time it takes for the pickup to be ready. For example, "Usually ready in 24 hours".).
- `presentmentTitle`: `String` — The presentment title of the pickup option.
- `price`: `MoneyV2` — The price of the pickup option.
- `title`: `String!` — The title of the pickup option.

## Related Types

- [Location](../../types/objects/Location.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
