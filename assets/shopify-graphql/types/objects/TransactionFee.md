# Object: `TransactionFee`

Transaction fee related to an order transaction.

**Implements:** `Node`

## Fields

- `amount`: `MoneyV2!` — Amount of the fee.
- `flatFee`: `MoneyV2!` — Flat rate charge for a transaction.
- `flatFeeName`: `String` — Name of the credit card flat fee.
- `id`: `ID!` — A globally-unique ID.
- `rate`: `Decimal!` — Percentage charge.
- `rateName`: `String` — Name of the credit card rate.
- `taxAmount`: `MoneyV2!` — Tax amount charged on the fee.
- `type`: `String!` — Name of the type of fee.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
