# Object: `OrderStagedChangeAddCustomItem`

A change to the order representing the addition of a
custom line item. For example, you might want to add gift wrapping service
as a custom line item.

## Fields

- `originalUnitPrice`: `MoneyV2!` — The price of an individual item without any discounts applied. This value can't be negative.
- `quantity`: `Int!` — The quantity of the custom item to add to the order. This value must be greater than zero.
- `title`: `String!` — The title of the custom item.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
