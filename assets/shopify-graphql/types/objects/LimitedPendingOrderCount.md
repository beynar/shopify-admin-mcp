# Object: `LimitedPendingOrderCount`

The total number of pending orders on a shop if less then a maximum, or that maximum.
The atMax field indicates when this maximum has been reached.

## Fields

- `atMax`: `Boolean!` — This is set when the number of pending orders has reached the maximum.
- `count`: `Int!` — The number of pendings orders on the shop.
