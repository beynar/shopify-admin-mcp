# Object: `AppRevenueAttributionRecord`

Tracks revenue that was captured outside of Shopify's billing system but needs to be attributed to the app for comprehensive revenue reporting and partner analytics. This object enables accurate revenue tracking when apps process payments through external systems while maintaining visibility into total app performance.

External revenue attribution is essential for apps that offer multiple payment channels or process certain transactions outside Shopify's billing infrastructure. For example, an enterprise app might process large custom contracts through external payment processors, or a marketplace app could handle direct merchant-to-merchant transactions that still generate app commissions.

Use the `AppRevenueAttributionRecord` object to:
- Report revenue from external payment processors and billing systems
- Track commission-based earnings from marketplace or referral activities
- Maintain comprehensive revenue analytics across multiple payment channels
- Ensure accurate partner revenue sharing and commission calculations
- Generate complete financial reports that include all app-generated revenue streams
- Support compliance requirements for external revenue documentation

Each attribution record includes the captured amount, external transaction timestamp, and idempotency keys to prevent duplicate reporting. The record type field categorizes different revenue streams, enabling detailed analytics and reporting segmentation.

Revenue attribution records are particularly important for apps participating in Shopify's partner program, as they ensure accurate revenue sharing calculations and comprehensive performance metrics. The captured timestamp reflects when the external payment was processed, not when the attribution record was created in Shopify.

For detailed revenue attribution values, see the [AppRevenueAttributionType enum](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevenueAttributionType).

**Implements:** `Node`

## Fields

- `amount`: `MoneyV2!` — The financial amount captured in this attribution.
- `capturedAt`: `DateTime!` — The timestamp when the financial amount was captured.
- `createdAt`: `DateTime!` — The timestamp at which this revenue attribution was issued.
- `id`: `ID!` — A globally-unique ID.
- `idempotencyKey`: `String!` — The unique value submitted during the creation of the app revenue attribution record.
- `test`: `Boolean!` — Indicates whether this is a test submission.
- `type`: `AppRevenueAttributionType!` — The type of revenue attribution.

## Related Types

- [AppRevenueAttributionType](../../types/enums/AppRevenueAttributionType.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
