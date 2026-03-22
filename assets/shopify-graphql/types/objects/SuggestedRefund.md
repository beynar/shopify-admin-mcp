# Object: `SuggestedRefund`

A refund amount that Shopify suggests based on the items, duties, and shipping costs that customers return. Provides a breakdown of all monetary values including subtotals, taxes, discounts, and the maximum refundable amount.

The suggested refund includes [`RefundLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem) objects to refund with their quantities and restock instructions, [`RefundDuty`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty) objects for duty reimbursements, and [`ShippingRefund`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRefund) for shipping cost refunds. Provides [`SuggestedOrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction) objects and the [`SuggestedRefundMethod`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SuggestedRefundMethod) interface to process the refund through the appropriate gateways.

Learn more about [previewing and refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties#step-3-preview-a-refund-that-includes-duties).

## Fields

- `amount`: `Money!` *(deprecated)* — The total monetary value to be refunded.
- `amountSet`: `MoneyBag!` — The total monetary value to be refunded in shop and presentment currencies.
- `discountedSubtotalSet`: `MoneyBag!` — The sum of all the discounted prices of the line items being refunded.
- `maximumRefundable`: `Money!` *(deprecated)* — The total monetary value available to refund.
- `maximumRefundableSet`: `MoneyBag!` — The total monetary value available to refund in shop and presentment currencies.
- `refundDuties`: `[RefundDuty!]!` — A list of duties to be refunded from the order.
- `refundLineItems`: `[RefundLineItem!]!` — A list of line items to be refunded, along with restock instructions.
- `shipping`: `ShippingRefund!` — The shipping costs to be refunded from the order.
- `subtotal`: `Money!` *(deprecated)* — The sum of all the prices of the line items being refunded.
- `subtotalSet`: `MoneyBag!` — The sum of all the prices of the line items being refunded in shop and presentment currencies.
- `suggestedRefundMethods`: `[SuggestedRefundMethod!]!` — A list of suggested refund methods.
- `suggestedTransactions`: `[SuggestedOrderTransaction!]!` — A list of suggested order transactions.
- `totalCartDiscountAmountSet`: `MoneyBag!` — The total cart discount amount that was applied to all line items in this refund.
- `totalDutiesSet`: `MoneyBag!` — The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive.
- `totalTaxSet`: `MoneyBag!` — The sum of the taxes being refunded from the order in shop and presentment currencies. The value must be positive.
- `totalTaxes`: `Money!` *(deprecated)* — The sum of the taxes being refunded from the order. The value must be positive.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [RefundDuty](../../types/objects/RefundDuty.md)
- [RefundLineItem](../../types/objects/RefundLineItem.md)
- [ShippingRefund](../../types/objects/ShippingRefund.md)
- [SuggestedOrderTransaction](../../types/objects/SuggestedOrderTransaction.md)
- [SuggestedRefundMethod](../../types/interfaces/SuggestedRefundMethod.md)
