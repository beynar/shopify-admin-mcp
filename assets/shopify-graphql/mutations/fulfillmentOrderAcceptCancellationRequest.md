# Mutation: `fulfillmentOrderAcceptCancellationRequest`

**Returns:** `FulfillmentOrderAcceptCancellationRequestPayload`

Accept a cancellation request sent to a fulfillment service for a fulfillment order.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order associated with the cancellation request.
- **`message`**: `String` — An optional reason for accepting the cancellation request.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order whose cancellation request was accepted.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderAcceptCancellationRequestPayload](../types/objects/FulfillmentOrderAcceptCancellationRequestPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderAcceptCancellationRequest($id: ID!, $message: String) {
  fulfillmentOrderAcceptCancellationRequest(id: $id, message: $message) {
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
