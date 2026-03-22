# Object: `SubscriptionPricingPolicy`

Represents a Subscription Line Pricing Policy.

## Fields

- `basePrice`: `MoneyV2!` — The base price per unit for the subscription line in the contract's currency.
- `cycleDiscounts`: `[SubscriptionCyclePriceAdjustment!]!` — The adjustments per cycle for the subscription line.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [SubscriptionCyclePriceAdjustment](../../types/objects/SubscriptionCyclePriceAdjustment.md)
