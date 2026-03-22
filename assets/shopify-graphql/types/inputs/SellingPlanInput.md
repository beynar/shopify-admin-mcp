# Input Object: `SellingPlanInput`

The input fields to create or update a selling plan.

## Input Fields

- `id`: `ID` — ID of the selling plan.
- `name`: `String` — Buyer facing string which describes the selling plan content.
- `description`: `String` — Buyer facing string which describes the selling plan commitment.
- `billingPolicy`: `SellingPlanBillingPolicyInput` — Selling plan policy which describes the billing details.
- `deliveryPolicy`: `SellingPlanDeliveryPolicyInput` — A selling plan policy which describes the delivery details.
- `inventoryPolicy`: `SellingPlanInventoryPolicyInput` — A selling plan policy which describes the inventory details.
- `metafields`: `[MetafieldInput!]` — Additional customizable information to associate with the SellingPlan.
- `pricingPolicies`: `[SellingPlanPricingPolicyInput!]` — The pricing policies which describe the pricing details. Each selling plan
- `options`: `[String!]` — The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.
- `position`: `Int` — Relative value for display purposes of this plan. A lower position will be displayed before a higher one.
- `category`: `SellingPlanCategory` — The category used to classify this selling plan for reporting purposes.

## Related Types

- [MetafieldInput](../../types/inputs/MetafieldInput.md)
- [SellingPlanBillingPolicyInput](../../types/inputs/SellingPlanBillingPolicyInput.md)
- [SellingPlanCategory](../../types/enums/SellingPlanCategory.md)
- [SellingPlanDeliveryPolicyInput](../../types/inputs/SellingPlanDeliveryPolicyInput.md)
- [SellingPlanInventoryPolicyInput](../../types/inputs/SellingPlanInventoryPolicyInput.md)
- [SellingPlanPricingPolicyInput](../../types/inputs/SellingPlanPricingPolicyInput.md)
