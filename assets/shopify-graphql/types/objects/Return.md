# Object: `Return`

The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant
or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)
and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem).
Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses),
which indicates the state of the return.

Use the `Return` object to capture the financial, logistical,
and business intent of a return. For example, you can identify eligible items for a return and issue customers
a refund for returned items on behalf of the merchant.

Learn more about providing a
[return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges),
[reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders),
and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries)
on behalf of merchants.

**Implements:** `Node`

## Fields

- `closedAt`: `DateTime` — The date and time when the return was closed.
- `createdAt`: `DateTime!` — The date and time when the return was created.
- `decline`: `ReturnDecline` — Additional information about the declined return.
- `exchangeLineItems` `(includeRemovedItems, processingStatus, first, after, last, before, reverse)`: `ExchangeLineItemConnection!` — The exchange line items attached to the return.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the return.
- `order`: `Order!` — The order that the return belongs to.
- `refunds` `(first, after, last, before, reverse)`: `RefundConnection!` — The list of refunds associated with the return.
- `requestApprovedAt`: `DateTime` — The date and time when the return was approved.
- `returnLineItems` `(processingStatus, first, after, last, before, reverse)`: `ReturnLineItemTypeConnection!` — The return line items attached to the return.
- `returnShippingFees`: `[ReturnShippingFee!]!` — The return shipping fees for the return.
- `reverseFulfillmentOrders` `(first, after, last, before, reverse)`: `ReverseFulfillmentOrderConnection!` — The list of reverse fulfillment orders for the return.
- `staffMember`: `StaffMember` — The staff member that created the return.
- `status`: `ReturnStatus!` — The status of the return.
- `suggestedFinancialOutcome` `(returnLineItems, exchangeLineItems, refundShipping, tipLineId, refundDuties, refundMethodAllocation)`: `SuggestedReturnFinancialOutcome` — A suggested financial outcome for the return.
- `suggestedRefund` `(returnRefundLineItems, refundShipping, refundDuties)`: `SuggestedReturnRefund` *(deprecated)* — A suggested refund for the return.
- `totalQuantity`: `Int!` — The sum of all return line item quantities for the return.
- `transactions` `(first, after, last, before, reverse)`: `OrderTransactionConnection!` — The order transactions created from the return.

## Related Types

- [Order](../../types/objects/Order.md)
- [RefundDutyInput](../../types/inputs/RefundDutyInput.md)
- [RefundMethodAllocation](../../types/enums/RefundMethodAllocation.md)
- [RefundShippingInput](../../types/inputs/RefundShippingInput.md)
- [ReturnDecline](../../types/objects/ReturnDecline.md)
- [ReturnProcessingStatusFilterInput](../../types/enums/ReturnProcessingStatusFilterInput.md)
- [ReturnRefundLineItemInput](../../types/inputs/ReturnRefundLineItemInput.md)
- [ReturnShippingFee](../../types/objects/ReturnShippingFee.md)
- [ReturnStatus](../../types/enums/ReturnStatus.md)
- [StaffMember](../../types/objects/StaffMember.md)
- [SuggestedOutcomeExchangeLineItemInput](../../types/inputs/SuggestedOutcomeExchangeLineItemInput.md)
- [SuggestedOutcomeReturnLineItemInput](../../types/inputs/SuggestedOutcomeReturnLineItemInput.md)
- [SuggestedReturnFinancialOutcome](../../types/objects/SuggestedReturnFinancialOutcome.md)
- [SuggestedReturnRefund](../../types/objects/SuggestedReturnRefund.md)
