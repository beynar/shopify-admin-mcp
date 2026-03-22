# Mutation: `fulfillmentOrderAcceptFulfillmentRequest`

**Returns:** `FulfillmentOrderAcceptFulfillmentRequestPayload`

Accepts a fulfillment request that the fulfillment service has received for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) which signals that the fulfillment service will process and fulfill the order. The fulfillment service can optionally provide a message to the merchant and an estimated shipped date when accepting the request.

Learn more about [accepting fulfillment requests](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#accept-a-fulfillment-request).

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order associated with the fulfillment request.
- **`message`**: `String` — An optional reason for accepting the fulfillment request.
- **`estimatedShippedAt`**: `DateTime` — The estimated date and time when the fulfillment order will be shipped.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order whose fulfillment request was accepted.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderAcceptFulfillmentRequestPayload](../types/objects/FulfillmentOrderAcceptFulfillmentRequestPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderAcceptFulfillmentRequest($id: ID!, $message: String, $estimatedShippedAt: DateTime) {
  fulfillmentOrderAcceptFulfillmentRequest(id: $id, message: $message, estimatedShippedAt: $estimatedShippedAt) {
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
