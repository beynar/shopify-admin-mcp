# Mutation: `fulfillmentOrderSubmitFulfillmentRequest`

**Returns:** `FulfillmentOrderSubmitFulfillmentRequestPayload`

Sends a fulfillment request to the fulfillment service assigned to a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder). The fulfillment service must then accept or reject the request before processing can begin.

You can either request fulfillment for all line items or specify individual items with quantities for partial fulfillment. When requesting partial fulfillment, Shopify splits the original fulfillment order into two: one with the submitted items and another with the remaining unsubmitted items. Include an optional message to communicate special instructions to the fulfillment service, such as gift wrapping or handling requirements.

Learn more about [managing fulfillment requests as a fulfillment service](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-4-act-on-fulfillment-requests).

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order associated with fulfillment request.
- **`message`**: `String` — An optional message for the fulfillment request.
- **`notifyCustomer`**: `Boolean` — Whether the customer should be notified when fulfillments are created for this fulfillment order.
- **`fulfillmentOrderLineItems`**: `[FulfillmentOrderLineItemInput!]` — The fulfillment order line items to be requested for fulfillment. If left blank, all line items of the fulfillment order are requested for fulfillment.

## Payload Fields

- `originalFulfillmentOrder`: `FulfillmentOrder` — The original fulfillment order intended to request fulfillment for.
- `submittedFulfillmentOrder`: `FulfillmentOrder` — The fulfillment order that was submitted to the fulfillment service. This will be the same as
- `unsubmittedFulfillmentOrder`: `FulfillmentOrder` — This field will only be present for partial fulfillment requests. This will represent the new
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderLineItemInput](../types/inputs/FulfillmentOrderLineItemInput.md)
- [FulfillmentOrderSubmitFulfillmentRequestPayload](../types/objects/FulfillmentOrderSubmitFulfillmentRequestPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderSubmitFulfillmentRequest($id: ID!, $message: String, $notifyCustomer: Boolean, $fulfillmentOrderLineItems: [FulfillmentOrderLineItemInput!]) {
  fulfillmentOrderSubmitFulfillmentRequest(id: $id, message: $message, notifyCustomer: $notifyCustomer, fulfillmentOrderLineItems: $fulfillmentOrderLineItems) {
    originalFulfillmentOrder {
      id
    }
    submittedFulfillmentOrder {
      id
    }
    unsubmittedFulfillmentOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
