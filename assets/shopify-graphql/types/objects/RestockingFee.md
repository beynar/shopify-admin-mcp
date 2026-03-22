# Object: `RestockingFee`

A restocking fee is a fee captured as part of a return to cover the costs of handling a return line item.
Typically, this would cover the costs of inspecting, repackaging, and restocking the item.

**Implements:** `Fee`

## Fields

- `amountSet`: `MoneyBag!` — The amount of the restocking fee, in shop and presentment currencies.
- `id`: `ID!` — The unique ID for the Fee.
- `percentage`: `Float!` — The value of the fee as a percentage.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
