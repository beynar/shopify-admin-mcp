# Object: `ExchangeV2`

An exchange where existing items on an order are returned and new items are added to the order.

**Implements:** `Node`

## Fields

- `additions`: `ExchangeV2Additions!` — The details of the new items in the exchange.
- `completedAt`: `DateTime` — The date and time when the exchange was completed.
- `createdAt`: `DateTime!` — The date and time when the exchange was created.
- `id`: `ID!` — A globally-unique ID.
- `location`: `Location` — The location where the exchange happened.
- `mirrored`: `Boolean!` — Mirrored from Admin Exchanges.
- `note`: `String` — The text of an optional note that a shop owner can attach to the exchange.
- `refunds`: `[Refund!]!` — The refunds processed during the exchange.
- `returns`: `ExchangeV2Returns!` — The details of the returned items in the exchange.
- `staffMember`: `StaffMember` — The staff member associated with the exchange.
- `totalAmountProcessedSet`: `MoneyBag!` — The amount of money that was paid or refunded as part of the exchange.
- `totalPriceSet`: `MoneyBag!` — The difference in values of the items that were exchanged.
- `transactions`: `[OrderTransaction!]!` — The order transactions related to the exchange.

## Related Types

- [ExchangeV2Additions](../../types/objects/ExchangeV2Additions.md)
- [ExchangeV2Returns](../../types/objects/ExchangeV2Returns.md)
- [Location](../../types/objects/Location.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [OrderTransaction](../../types/objects/OrderTransaction.md)
- [Refund](../../types/objects/Refund.md)
- [StaffMember](../../types/objects/StaffMember.md)
