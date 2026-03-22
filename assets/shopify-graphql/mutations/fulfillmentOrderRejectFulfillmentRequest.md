# Mutation: `fulfillmentOrderRejectFulfillmentRequest`

**Returns:** `FulfillmentOrderRejectFulfillmentRequestPayload`

Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order associated with the fulfillment request.
- **`reason`**: `FulfillmentOrderRejectionReason` — The reason for the fulfillment order rejection.
- **`message`**: `String` — An optional reason for rejecting the fulfillment request.
- **`lineItems`**: `[IncomingRequestLineItemInput!]` — An optional array of line item rejection details. If none are provided, all line items will be assumed to be unfulfillable.  **Note**: After the fulfillment request has been rejected, none of the line items will be able to be fulfilled. This field documents which line items specifically were unable to be fulfilled and why.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order whose fulfillment request was rejected.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderRejectFulfillmentRequestPayload](../types/objects/FulfillmentOrderRejectFulfillmentRequestPayload.md)
- [FulfillmentOrderRejectionReason](../types/enums/FulfillmentOrderRejectionReason.md)
- [IncomingRequestLineItemInput](../types/inputs/IncomingRequestLineItemInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderRejectFulfillmentRequest($id: ID!, $reason: FulfillmentOrderRejectionReason, $message: String, $lineItems: [IncomingRequestLineItemInput!]) {
  fulfillmentOrderRejectFulfillmentRequest(id: $id, reason: $reason, message: $message, lineItems: $lineItems) {
    fulfillmentOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
