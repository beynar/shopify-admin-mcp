# Object: `AppCredit`

Represents monetary credits that merchants can apply toward future app purchases, subscriptions, or usage-based billing within their Shopify store. App credits provide a flexible way to offer refunds, promotional credits, or compensation without processing external payments.

For example, if a merchant experiences service downtime, an app might issue credits equivalent to the affected billing period. These credits can apply to future charges, reducing the merchant's next invoice or extending their subscription period.

Use the `AppCredit` object to:
- Issue refunds for service interruptions or billing disputes
- Provide promotional credits for new merchant onboarding
- Compensate merchants for app-related issues or downtime
- Create loyalty rewards or referral bonuses within your billing system
- Track credit balances and application history for accounting purposes

For comprehensive billing strategies and credit management patterns, see the [subscription billing guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

**Implements:** `Node`

## Fields

- `amount`: `MoneyV2!` — The amount that can be used towards future app purchases in Shopify.
- `createdAt`: `DateTime!` — The date and time when the app credit was created.
- `description`: `String!` — The description of the app credit.
- `id`: `ID!` — A globally-unique ID.
- `test`: `Boolean!` — Whether the app credit is a test transaction.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
