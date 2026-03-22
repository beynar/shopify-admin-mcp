# Input Object: `FulfillmentOrderHoldInput`

The input fields for the fulfillment hold applied on the fulfillment order.

## Input Fields

- `reason`: `FulfillmentHoldReason!` — The reason for the fulfillment hold.
- `reasonNotes`: `String` — Additional information about the fulfillment hold reason.
- `notifyMerchant`: `Boolean` = `false` — Whether the merchant receives a notification about the fulfillment hold. The default value is `false`.
- `externalId`: `String` — A configurable ID used to track the automation system releasing these holds.
- `handle`: `String` = `""` — An identifier that an app can use to reference one of the holds that it applies to a
- `fulfillmentOrderLineItems`: `[FulfillmentOrderLineItemInput!]` = `[]` — The fulfillment order line items to be placed on hold.

## Related Types

- [FulfillmentHoldReason](../../types/enums/FulfillmentHoldReason.md)
- [FulfillmentOrderLineItemInput](../../types/inputs/FulfillmentOrderLineItemInput.md)
