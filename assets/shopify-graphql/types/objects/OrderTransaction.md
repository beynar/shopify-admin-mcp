# Object: `OrderTransaction`

The `OrderTransaction` object represents a payment transaction that's associated with an order. An order
transaction is a specific action or event that happens within the context of an order, such as a customer paying
for a purchase or receiving a refund, or other payment-related activity.

Use the `OrderTransaction` object to capture the complete lifecycle of a payment, from initial
authorization to final settlement, including refunds and currency exchanges. Common use cases for using the
`OrderTransaction` object include:

- Processing new payments for orders
- Managing payment authorizations and captures
- Processing refunds for returned items
- Tracking payment status and errors
- Managing multi-currency transactions
- Handling payment gateway integrations

Each `OrderTransaction` object has a [`kind`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind)
that defines the type of transaction and a [`status`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus)
that indicates the current state of the transaction. The object stores detailed information about payment
methods, gateway processing, and settlement details.

Learn more about [payment processing](https://help.shopify.com/manual/payments)
and [payment gateway integrations](https://www.shopify.com/ca/payment-gateways).

**Implements:** `Node`

## Fields

- `accountNumber`: `String` — The masked account number associated with the payment method.
- `amount`: `Money!` *(deprecated)* — The amount of money.
- `amountRoundingSet`: `MoneyBag` — The rounding adjustment applied on the cash amount in shop and presentment currencies.
- `amountSet`: `MoneyBag!` — The amount and currency of the transaction in shop and presentment currencies.
- `amountV2`: `MoneyV2!` *(deprecated)* — The amount and currency of the transaction.
- `authorizationCode`: `String` *(deprecated)* — Authorization code associated with the transaction.
- `authorizationExpiresAt`: `DateTime` — The time when the authorization expires. This field is available only to stores on a Shopify Plus plan.
- `createdAt`: `DateTime!` — Date and time when the transaction was created.
- `currencyExchangeAdjustment`: `CurrencyExchangeAdjustment` — An adjustment on the transaction showing the amount lost or gained  due to fluctuations in the currency exchange rate.
- `device`: `PointOfSaleDevice` — The Shopify Point of Sale device used to process the transaction.
- `errorCode`: `OrderTransactionErrorCode` — A standardized error code, independent of the payment provider.
- `fees`: `[TransactionFee!]!` — The transaction fees charged on the order transaction. Only present for Shopify Payments transactions.
- `formattedGateway`: `String` — The human-readable payment gateway name used to process the transaction.
- `gateway`: `String` — The payment gateway used to process the transaction.
- `id`: `ID!` — A globally-unique ID.
- `kind`: `OrderTransactionKind!` — The kind of transaction.
- `location`: `Location` — The physical location where the transaction was processed.
- `manualPaymentGateway`: `Boolean!` — Whether the transaction is processed by manual payment gateway.
- `manuallyCapturable`: `Boolean!` — Whether the transaction can be manually captured.
- `maximumRefundable`: `Money` *(deprecated)* — Specifies the available amount to refund on the gateway.
- `maximumRefundableV2`: `MoneyV2` — Specifies the available amount with currency to refund on the gateway.
- `multiCapturable`: `Boolean!` — Whether the transaction can be captured multiple times.
- `order`: `Order` — The associated order.
- `parentTransaction`: `OrderTransaction` — The associated parent transaction, for example the authorization of a capture.
- `paymentDetails`: `PaymentDetails` — The payment details for the transaction.
- `paymentIcon`: `Image` — The payment icon to display for the transaction.
- `paymentId`: `String` — The payment ID associated with the transaction.
- `paymentMethod`: `PaymentMethods` *(deprecated)* — The payment method used for the transaction. This value is `null` if the payment method is unknown.
- `processedAt`: `DateTime` — Date and time when the transaction was processed.
- `receiptJson`: `JSON` — The transaction receipt that the payment gateway attaches to the transaction.
- `settlementCurrency`: `CurrencyCode` — The settlement currency.
- `settlementCurrencyRate`: `Decimal` — The rate used when converting the transaction amount to settlement currency.
- `shopifyPaymentsSet`: `ShopifyPaymentsTransactionSet` — Contains all Shopify Payments information related to an order transaction. This field is available only to stores on a Shopify Plus plan.
- `status`: `OrderTransactionStatus!` — The status of this transaction.
- `test`: `Boolean!` — Whether the transaction is a test transaction.
- `totalUnsettled`: `Money` *(deprecated)* — Specifies the available amount to capture on the gateway.
- `totalUnsettledSet`: `MoneyBag` — Specifies the available amount with currency to capture on the gateway in shop and presentment currencies.
- `totalUnsettledV2`: `MoneyV2` *(deprecated)* — Specifies the available amount with currency to capture on the gateway.
- `user`: `StaffMember` — Staff member who was logged into the Shopify POS device when the transaction was processed.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [CurrencyExchangeAdjustment](../../types/objects/CurrencyExchangeAdjustment.md)
- [Image](../../types/objects/Image.md)
- [Location](../../types/objects/Location.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [Order](../../types/objects/Order.md)
- [OrderTransactionErrorCode](../../types/enums/OrderTransactionErrorCode.md)
- [OrderTransactionKind](../../types/enums/OrderTransactionKind.md)
- [OrderTransactionStatus](../../types/enums/OrderTransactionStatus.md)
- [PaymentDetails](../../types/unions/PaymentDetails.md)
- [PaymentMethods](../../types/enums/PaymentMethods.md)
- [PointOfSaleDevice](../../types/objects/PointOfSaleDevice.md)
- [ShopifyPaymentsTransactionSet](../../types/objects/ShopifyPaymentsTransactionSet.md)
- [StaffMember](../../types/objects/StaffMember.md)
- [TransactionFee](../../types/objects/TransactionFee.md)
