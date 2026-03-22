# Mutation: `fulfillmentOrderHold`

**Returns:** `FulfillmentOrderHoldPayload`

Applies a fulfillment hold on a fulfillment order.

As of the
[2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order),
the mutation can be successfully executed on fulfillment orders that are already on hold.
To place multiple holds on a fulfillment order, apps need to supply the
[handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle)
field. Each app can place up to
10 active holds
per fulfillment order. If an app attempts to place more than this, the mutation will return
[a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached).
The app would need to release one of its existing holds before being able to apply a new one.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order on which a fulfillment hold is applied.
- **`fulfillmentHold`**: `FulfillmentOrderHoldInput!` — The details of the fulfillment hold applied on the fulfillment order.

## Payload Fields

- `fulfillmentHold`: `FulfillmentHold` — The fulfillment hold created for the fulfillment order. Null if no hold was created.
- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order on which a fulfillment hold was applied.
- `remainingFulfillmentOrder`: `FulfillmentOrder` — The remaining fulfillment order containing the line items to which the hold wasn't applied,
- `userErrors`: `[FulfillmentOrderHoldUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentHold](../types/objects/FulfillmentHold.md)
- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderHoldInput](../types/inputs/FulfillmentOrderHoldInput.md)
- [FulfillmentOrderHoldPayload](../types/objects/FulfillmentOrderHoldPayload.md)
- [FulfillmentOrderHoldUserError](../types/objects/FulfillmentOrderHoldUserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderHold($id: ID!, $fulfillmentHold: FulfillmentOrderHoldInput!) {
  fulfillmentOrderHold(id: $id, fulfillmentHold: $fulfillmentHold) {
    fulfillmentHold {
      id
    }
    fulfillmentOrder {
      id
    }
    remainingFulfillmentOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
