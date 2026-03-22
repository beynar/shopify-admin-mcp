# Mutation: `fulfillmentOrderRejectCancellationRequest`

**Returns:** `FulfillmentOrderRejectCancellationRequestPayload`

Rejects a cancellation request sent to a fulfillment service for a fulfillment order.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order associated with the cancellation request.
- **`message`**: `String` — An optional reason for rejecting the cancellation request.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order whose cancellation request was rejected.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderRejectCancellationRequestPayload](../types/objects/FulfillmentOrderRejectCancellationRequestPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
  fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
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
