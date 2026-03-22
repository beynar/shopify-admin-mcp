# Object: `AppSubscriptionLineItem`

Represents a component of an app subscription that contains pricing details for either recurring fees or usage-based charges. Each subscription has exactly 1 or 2 line items - one for recurring fees and/or one for usage fees.

If a subscription has both recurring and usage pricing, there will be 2 line items. If it only has one type of pricing, the subscription will have a single line item for that pricing model.

Use the `AppSubscriptionLineItem` object to:
- View the pricing terms a merchant has agreed to
- Distinguish between recurring and usage fee components
- Access detailed billing information for each pricing component

This read-only object provides visibility into the subscription's pricing structure without allowing modifications.

Read about subscription pricing models in the [billing architecture guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

## Fields

- `id`: `ID!` — A globally-unique ID.
- `plan`: `AppPlanV2!` — The pricing model for the app subscription.
- `usageRecords` `(first, after, last, before, reverse, sortKey)`: `AppUsageRecordConnection!` — A list of the store's usage records for a usage pricing plan.

## Related Types

- [AppPlanV2](../../types/objects/AppPlanV2.md)
- [AppUsageRecordSortKeys](../../types/enums/AppUsageRecordSortKeys.md)
