# Input Object: `ProductSetInventoryInput`

The input fields required to set inventory quantities using `productSet` mutation.

## Input Fields

- `locationId`: `ID!` — The ID of the location of the inventory quantity being set.
- `name`: `String!` — The name of the inventory quantity being set. Must be one of `available` or `on_hand`.
- `quantity`: `Int!` — The values to which each quantities will be set.
