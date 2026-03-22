# Object: `DeliveryMethodDefinition`

A method definition contains the delivery rate and the conditions that must be met for the method to be
applied.

**Implements:** `Node`

## Fields

- `active`: `Boolean!` — Whether this method definition is active.
- `description`: `String` — The description of the method definition. Only available on shipping rates that are custom.
- `id`: `ID!` — A globally-unique ID.
- `methodConditions`: `[DeliveryCondition!]!` — The method conditions that must pass for this method definition to be applied to an order.
- `name`: `String!` — The name of the method definition.
- `rateProvider`: `DeliveryRateProvider!` — The provided rate for this method definition, from a rate definition or participant.

## Related Types

- [DeliveryCondition](../../types/objects/DeliveryCondition.md)
- [DeliveryRateProvider](../../types/unions/DeliveryRateProvider.md)
