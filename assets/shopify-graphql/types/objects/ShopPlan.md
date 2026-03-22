# Object: `ShopPlan`

The shop's billing plan and subscription details. Indicates the plan tier (such as Basic, Advanced, or Plus), whether the shop has a Shopify Plus subscription, and if it's a dev store for testing.

## Fields

- `displayName`: `String!` *(deprecated)* — The name of the shop's billing plan.
- `partnerDevelopment`: `Boolean!` — Whether the shop is a partner development shop for testing purposes.
- `publicDisplayName`: `String!` — The public display name of the shop's billing plan. Possible values are: Advanced, Agentic, Agentic Enterprise, Basic, Development, Grow, Inactive, Lite, Other, Paused, Plus, Plus Trial, Retail, Shop Component, Shopify Finance, Staff Business, Starter, and Trial.
- `shopifyPlus`: `Boolean!` — Whether the shop has a Shopify Plus subscription.
