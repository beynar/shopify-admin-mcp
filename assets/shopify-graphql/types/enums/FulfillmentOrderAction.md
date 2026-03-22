# Enum: `FulfillmentOrderAction`

The actions that can be taken on a fulfillment order.

## Values

- `CREATE_FULFILLMENT` — Creates a fulfillment for selected line items in the fulfillment order. The corresponding mutation for this action is `fulfillmentCreateV2`.
- `REQUEST_FULFILLMENT` — Sends a request for fulfilling selected line items in a fulfillment order to a fulfillment service. The corresponding mutation for this action is `fulfillmentOrderSubmitFulfillmentRequest`.
- `CANCEL_FULFILLMENT_ORDER` — Cancels a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderCancel`.
- `MOVE` — Moves a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMove`.
- `REQUEST_CANCELLATION` — Sends a cancellation request to the fulfillment service of a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSubmitCancellationRequest`.
- `MARK_AS_OPEN` — Marks the fulfillment order as open. The corresponding mutation for this action is `fulfillmentOrderOpen`.
- `RELEASE_HOLD` — Releases the fulfillment hold on the fulfillment order. The corresponding mutation for this action is `fulfillmentOrderReleaseHold`.
- `HOLD` — Applies a fulfillment hold on the fulfillment order. The corresponding mutation for this action is `fulfillmentOrderHold`.
- `EXTERNAL` — Opens an external URL to initiate the fulfillment process outside Shopify. This action should be paired with `FulfillmentOrderSupportedAction.externalUrl`.
- `SPLIT` — Splits a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSplit`.
- `MERGE` — Merges a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMerge`.
