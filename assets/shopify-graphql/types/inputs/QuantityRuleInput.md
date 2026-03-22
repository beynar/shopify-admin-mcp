# Input Object: `QuantityRuleInput`

The input fields for the per-order quantity rule to be applied on the product variant.

## Input Fields

- `increment`: `Int!` — The quantity increment.
- `maximum`: `Int` = `null` — The maximum quantity.
- `minimum`: `Int!` — The minimum quantity.
- `variantId`: `ID!` — Product variant on which to apply the quantity rule.
