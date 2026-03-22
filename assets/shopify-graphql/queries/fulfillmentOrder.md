# Query: `fulfillmentOrder`

**Returns:** `FulfillmentOrder`

Returns a `FulfillmentOrder` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `FulfillmentOrder` to return.

## Return Type Fields

- `assignedLocation`: `FulfillmentOrderAssignedLocation!` — The fulfillment order's assigned location. This is the location where the fulfillment is expected to happen.
- `channelId`: `ID` — ID of the channel that created the order.
- `createdAt`: `DateTime!` — Date and time when the fulfillment order was created.
- `deliveryMethod`: `DeliveryMethod` — Delivery method of this fulfillment order.
- `destination`: `FulfillmentOrderDestination` — The destination where the items should be sent.
- `fulfillAt`: `DateTime` — The date and time at which the fulfillment order will be fulfillable. When this date and time is reached, the scheduled fulfillment order is automatically transitioned to open. For example, the `fulfill_at` date for a subscription order might be the 1st of each month, a pre-order `fulfill_at` date would be `nil`, and a standard order `fulfill_at` date would be the order creation date.
- `fulfillBy`: `DateTime` — The latest date and time by which all items in the fulfillment order need to be fulfilled.
- `fulfillmentHolds`: `[FulfillmentHold!]!` — The fulfillment holds applied on the fulfillment order.
- `fulfillmentOrdersForMerge`: `FulfillmentOrderConnection!` — Fulfillment orders eligible for merging with the given fulfillment order.
- `fulfillments`: `FulfillmentConnection!` — A list of fulfillments for the fulfillment order.
- `id`: `ID!` — A globally-unique ID.
- `internationalDuties`: `FulfillmentOrderInternationalDuties` — The duties delivery method of this fulfillment order.
- `lineItems`: `FulfillmentOrderLineItemConnection!` — A list of the fulfillment order's line items.
- `locationsForMove`: `FulfillmentOrderLocationForMoveConnection!` — A list of locations that the fulfillment order can potentially move to.
- `merchantRequests`: `FulfillmentOrderMerchantRequestConnection!` — A list of requests sent by the merchant or an order management app to the fulfillment service for the fulfillment order.
- `order`: `Order!` — The order that's associated with the fulfillment order.
- `orderId`: `ID!` — ID of the order that's associated with the fulfillment order.
- `orderName`: `String!` — The unique identifier for the order that appears on the order page in the Shopify admin and the <b>Order status</b> page.
- `orderProcessedAt`: `DateTime!` — The date and time when the order was processed.
- `requestStatus`: `FulfillmentOrderRequestStatus!` — The request status of the fulfillment order.
- `status`: `FulfillmentOrderStatus!` — The status of the fulfillment order.
- `supportedActions`: `[FulfillmentOrderSupportedAction!]!` — The actions that can be performed on this fulfillment order.
- `updatedAt`: `DateTime!` — The date and time when the fulfillment order was last updated.

## Related Types

- [DeliveryMethod](../types/objects/DeliveryMethod.md)
- [FulfillmentHold](../types/objects/FulfillmentHold.md)
- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderAssignedLocation](../types/objects/FulfillmentOrderAssignedLocation.md)
- [FulfillmentOrderDestination](../types/objects/FulfillmentOrderDestination.md)
- [FulfillmentOrderInternationalDuties](../types/objects/FulfillmentOrderInternationalDuties.md)
- [FulfillmentOrderRequestStatus](../types/enums/FulfillmentOrderRequestStatus.md)
- [FulfillmentOrderStatus](../types/enums/FulfillmentOrderStatus.md)
- [FulfillmentOrderSupportedAction](../types/objects/FulfillmentOrderSupportedAction.md)
- [Order](../types/objects/Order.md)

## Example Query

```graphql
query FulfillmentOrder($id: ID!) {
  fulfillmentOrder(id: $id) {
    channelId
    createdAt
    fulfillAt
    fulfillBy
  }
}
```
