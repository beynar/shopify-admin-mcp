# Input Object: `SubscriptionLineInput`

The input fields required to add a new subscription line to a contract.

## Input Fields

- `productVariantId`: `ID!` — The ID of the product variant the subscription line refers to.
- `quantity`: `Int!` — The quantity of the product.
- `currentPrice`: `Decimal!` — The price of the product.
- `customAttributes`: `[AttributeInput!]` — The custom attributes for this subscription line.
- `sellingPlanId`: `ID` — The selling plan for the subscription line.
- `sellingPlanName`: `String` — The selling plan name for the subscription line.
- `pricingPolicy`: `SubscriptionPricingPolicyInput` — Describes expected price changes of the subscription line over time.

## Related Types

- [AttributeInput](../../types/inputs/AttributeInput.md)
- [SubscriptionPricingPolicyInput](../../types/inputs/SubscriptionPricingPolicyInput.md)
