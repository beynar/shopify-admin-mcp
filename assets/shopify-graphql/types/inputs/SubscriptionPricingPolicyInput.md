# Input Object: `SubscriptionPricingPolicyInput`

The input fields for expected price changes of the subscription line over time.

## Input Fields

- `basePrice`: `Decimal!` — The base price per unit for the subscription line in the contract's currency.
- `cycleDiscounts`: `[SubscriptionPricingPolicyCycleDiscountsInput!]!` — An array containing all pricing changes for each billing cycle.

## Related Types

- [SubscriptionPricingPolicyCycleDiscountsInput](../../types/inputs/SubscriptionPricingPolicyCycleDiscountsInput.md)
