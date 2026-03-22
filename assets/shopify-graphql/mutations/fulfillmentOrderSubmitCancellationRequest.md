# Mutation: `fulfillmentOrderSubmitCancellationRequest`

**Returns:** `FulfillmentOrderSubmitCancellationRequestPayload`

Sends a cancellation request to the fulfillment service of a fulfillment order.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order associated with the cancellation request.
- **`message`**: `String` — An optional reason for the cancellation request.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order specified in the cancelation request.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderSubmitCancellationRequestPayload](../types/objects/FulfillmentOrderSubmitCancellationRequestPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
  fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
