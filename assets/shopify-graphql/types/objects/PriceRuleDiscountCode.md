# Object: `PriceRuleDiscountCode`

A discount code of a price rule.

**Implements:** `Node`

## Fields

- `app`: `App` — The application that created the discount code.
- `code`: `String!` — The code to apply the discount.
- `id`: `ID!` — A globally-unique ID.
- `usageCount`: `Int!` — The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count.

## Related Types

- [App](../../types/objects/App.md)
