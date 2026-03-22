# Mutation: `fulfillmentOrderClose`

**Returns:** `FulfillmentOrderClosePayload`

Marks an in-progress fulfillment order as incomplete,
indicating the fulfillment service is unable to ship any remaining items,
and closes the fulfillment request.

This mutation can only be called for fulfillment orders that meet the following criteria:
  - Assigned to a fulfillment service location,
  - The fulfillment request has been accepted,
  - The fulfillment order status is `IN_PROGRESS`.

This mutation can only be called by the fulfillment service app that accepted the fulfillment request.
Calling this mutation returns the control of the fulfillment order to the merchant, allowing them to
move the fulfillment order line items to another location and fulfill from there,
remove and refund the line items, or to request fulfillment from the same fulfillment service again.

Closing a fulfillment order is explained in
[the fulfillment service guide](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-optional-close-a-fulfillment-order).

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order to mark as incomplete.
- **`message`**: `String` — An optional reason for marking the fulfillment order as incomplete.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order that was marked as incomplete.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderClosePayload](../types/objects/FulfillmentOrderClosePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderClose($id: ID!, $message: String) {
  fulfillmentOrderClose(id: $id, message: $message) {
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
