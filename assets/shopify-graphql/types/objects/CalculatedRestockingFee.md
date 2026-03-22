# Object: `CalculatedRestockingFee`

The calculated costs of handling a return line item.
Typically, this would cover the costs of inspecting, repackaging, and restocking the item.

**Implements:** `CalculatedReturnFee`

## Fields

- `amountSet`: `MoneyBag!` — The calculated amount of the return fee, in shop and presentment currencies.
- `id`: `ID!` — A globally-unique ID.
- `percentage`: `Float!` — The value of the fee as a percentage.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
