# Object: `ShopifyPaymentsBalanceTransaction`

A transaction that contributes to a Shopify Payments account balance. Records money movement from charges, refunds, payouts, adjustments, or other payment activities. Includes the gross amount, processing fees, and resulting net amount that affects the account balance. Links to the source of the transaction and associated [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) details, with optional references to [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects or adjustment reasons when applicable.

**Implements:** `Node`

## Fields

- `adjustmentReason`: `String` — The reason for the adjustment that's associated with the transaction.
- `adjustmentsOrders`: `[ShopifyPaymentsAdjustmentOrder!]!` — The adjustment orders associated to the transaction.
- `amount`: `MoneyV2!` — The amount contributing to the balance transaction.
- `associatedOrder`: `ShopifyPaymentsAssociatedOrder` — The associated order for the balance transaction.
- `associatedPayout`: `ShopifyPaymentsBalanceTransactionAssociatedPayout!` — Payout assoicated with the transaction.
- `fee`: `MoneyV2!` — The fee amount contributing to the balance transaction.
- `id`: `ID!` — A globally-unique ID.
- `net`: `MoneyV2!` — The net amount contributing to the merchant's balance.
- `sourceId`: `BigInt` — The ID of the resource leading to the transaction.
- `sourceOrderTransactionId`: `BigInt` — The id of the
- `sourceType`: `ShopifyPaymentsSourceType` — The source type of the balance transaction.
- `test`: `Boolean!` — Wether the tranaction was created in test mode.
- `transactionDate`: `DateTime!` — The date and time when the balance transaction was processed.
- `type`: `ShopifyPaymentsTransactionType!` — The type of transaction.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [ShopifyPaymentsAdjustmentOrder](../../types/objects/ShopifyPaymentsAdjustmentOrder.md)
- [ShopifyPaymentsAssociatedOrder](../../types/objects/ShopifyPaymentsAssociatedOrder.md)
- [ShopifyPaymentsBalanceTransactionAssociatedPayout](../../types/objects/ShopifyPaymentsBalanceTransactionAssociatedPayout.md)
- [ShopifyPaymentsSourceType](../../types/enums/ShopifyPaymentsSourceType.md)
- [ShopifyPaymentsTransactionType](../../types/enums/ShopifyPaymentsTransactionType.md)
