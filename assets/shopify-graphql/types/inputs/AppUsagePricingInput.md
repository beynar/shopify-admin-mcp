# Input Object: `AppUsagePricingInput`

The input fields to issue arbitrary charges for app usage associated with a subscription.

## Input Fields

- `cappedAmount`: `MoneyInput!` — The maximum amount of usage charges that can be incurred within a subscription billing interval.
- `terms`: `String!` — The terms and conditions for app usage. These terms stipulate the pricing model for the charges that an app creates.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
