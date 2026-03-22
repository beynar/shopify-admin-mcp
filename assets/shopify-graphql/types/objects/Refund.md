# Object: `Refund`

The `Refund` object represents a financial record of money returned to a customer from an order.
It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions
associated with returning products or correcting order issues.

The `Refund` object provides information to:

- Process customer returns and issue payments back to customers
- Handle partial or full refunds for line items with optional inventory restocking
- Refund shipping costs, duties, and additional fees
- Issue store credit refunds as an alternative to original payment method returns
- Track and reconcile all financial transactions related to refunds

Each `Refund` object maintains detailed records of what was refunded, how much was refunded,
which payment transactions were involved, and any inventory restocking that occurred. The refund
can include multiple components such as product line items, shipping charges, taxes, duties, and
additional fees, all calculated with proper currency handling for international orders.

Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)
and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)
if the refund was initiated through the returns process. The refund tracks both the presentment currency
(what the customer sees) and the shop currency for accurate financial reporting.

> Note:
> The existence of a `Refund` object doesn't guarantee that the money has been returned to the customer.
> The actual financial processing happens through associated
> [`OrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)
> objects, which can be in various states, such as pending, processing, success, or failure.
> To determine if money has actually been refunded, check the
> [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status)
> of the associated transactions.

Learn more about
[managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management),
[refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and
[processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

**Implements:** `LegacyInteroperability`, `Node`

## Fields

- `createdAt`: `DateTime` — The date and time when the refund was created.
- `duties`: `[RefundDuty!]` — A list of the refunded duties as part of this refund.
- `id`: `ID!` — A globally-unique ID.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `note`: `String` — The optional note associated with the refund.
- `order`: `Order!` — The order associated with the refund.
- `orderAdjustments` `(first, after, last, before, reverse)`: `OrderAdjustmentConnection!` — The order adjustments that are attached with the refund.
- `processedAt`: `DateTime!` — The date and time when the refund was processed.
- `refundLineItems` `(first, after, last, before, reverse)`: `RefundLineItemConnection!` — The `RefundLineItem` resources attached to the refund.
- `refundShippingLines` `(first, after, last, before, reverse)`: `RefundShippingLineConnection!` — The `RefundShippingLine` resources attached to the refund.
- `return`: `Return` — The return associated with the refund.
- `staffMember`: `StaffMember` — The staff member who created the refund.
- `totalRefunded`: `MoneyV2!` *(deprecated)* — The total amount across all transactions for the refund.
- `totalRefundedSet`: `MoneyBag!` — The total amount across all transactions for the refund, in shop and presentment currencies.
- `transactions` `(first, after, last, before, reverse)`: `OrderTransactionConnection!` — The transactions associated with the refund.
- `updatedAt`: `DateTime!` — The date and time when the refund was updated.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [Order](../../types/objects/Order.md)
- [RefundDuty](../../types/objects/RefundDuty.md)
- [Return](../../types/objects/Return.md)
- [StaffMember](../../types/objects/StaffMember.md)
