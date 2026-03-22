# Object: `AppUsagePricing`

Defines usage-based pricing terms for app subscriptions where merchants pay based on their actual consumption of app features or services. This pricing model provides flexibility for merchants who want to pay only for what they use rather than fixed monthly fees.

For example, an email marketing app might charge variable pricing per email sent, with a monthly cap of variable pricing, allowing small merchants to pay minimal amounts while protecting larger merchants from excessive charges.

Use the `AppUsagePricing` object to:
- View consumption-based billing for variable app usage
- See spending caps that protect merchants from unexpected charges

The balance and capped amount fields provide apps with data about current usage costs and remaining budget within the billing period, which apps can present to merchants to promote transparency in variable pricing.

For implementation guidance, see the [usage billing documentation](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-usage-based-subscriptions).

## Fields

- `balanceUsed`: `MoneyV2!` — The total usage records for interval.
- `cappedAmount`: `MoneyV2!` — The capped amount prevents the merchant from being charged for any usage over that amount during a billing period.
- `interval`: `AppPricingInterval!` — The frequency with which the app usage records are billed.
- `terms`: `String!` — The terms and conditions for app usage pricing.

## Related Types

- [AppPricingInterval](../../types/enums/AppPricingInterval.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
