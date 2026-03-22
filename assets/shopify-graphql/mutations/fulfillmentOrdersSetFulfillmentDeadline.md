# Mutation: `fulfillmentOrdersSetFulfillmentDeadline`

**Returns:** `FulfillmentOrdersSetFulfillmentDeadlinePayload`

Sets the latest date and time by which the fulfillment orders need to be fulfilled.

## Arguments

- **`fulfillmentOrderIds`**: `[ID!]!` — The IDs of the fulfillment orders for which the deadline is being set.
- **`fulfillmentDeadline`**: `DateTime!` — The new fulfillment deadline of the fulfillment orders.

## Payload Fields

- `success`: `Boolean` — Whether the fulfillment deadline was successfully set.
- `userErrors`: `[FulfillmentOrdersSetFulfillmentDeadlineUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrdersSetFulfillmentDeadlinePayload](../types/objects/FulfillmentOrdersSetFulfillmentDeadlinePayload.md)
- [FulfillmentOrdersSetFulfillmentDeadlineUserError](../types/objects/FulfillmentOrdersSetFulfillmentDeadlineUserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrdersSetFulfillmentDeadline($fulfillmentOrderIds: [ID!]!, $fulfillmentDeadline: DateTime!) {
  fulfillmentOrdersSetFulfillmentDeadline(fulfillmentOrderIds: $fulfillmentOrderIds, fulfillmentDeadline: $fulfillmentDeadline) {
    success
    userErrors {
      field
      message
    }
  }
}
```
