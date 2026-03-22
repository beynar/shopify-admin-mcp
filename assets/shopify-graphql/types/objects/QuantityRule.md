# Object: `QuantityRule`

The quantity rule for the product variant in a given context.

## Fields

- `increment`: `Int!` — The value that specifies the quantity increment between minimum and maximum of the rule.
- `isDefault`: `Boolean!` — Whether the quantity rule fields match one increment, one minimum and no maximum.
- `maximum`: `Int` — An optional value that defines the highest allowed quantity purchased by the customer.
- `minimum`: `Int!` — The value that defines the lowest allowed quantity purchased by the customer.
- `originType`: `QuantityRuleOriginType!` — Whether the values of the quantity rule were explicitly set.
- `productVariant`: `ProductVariant!` — The product variant for which the quantity rule is applied.

## Related Types

- [ProductVariant](../../types/objects/ProductVariant.md)
- [QuantityRuleOriginType](../../types/enums/QuantityRuleOriginType.md)
