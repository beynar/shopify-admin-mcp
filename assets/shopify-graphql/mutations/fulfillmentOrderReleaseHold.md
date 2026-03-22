# Mutation: `fulfillmentOrderReleaseHold`

**Returns:** `FulfillmentOrderReleaseHoldPayload`

Releases the fulfillment hold on a fulfillment order.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order for which to release the fulfillment hold.
- **`holdIds`**: `[ID!]` — The IDs of the fulfillment holds to release.<br/>             <br/>             Holds will only be released if they belong to the fulfillment order specified by the `id` argument.<br/>             <br/>             <strong>NOTE:</strong> If not supplied, all holds for the fulfillment order will be released.             It is highly recommended that apps supply the ids of the holds that they intend to release.             Releasing all holds on a fulfillment order will result in the fulfillment order being released prematurely             and items being incorrectly fulfilled.
- **`externalId`**: `String` — A configurable ID used to track the automation system releasing this hold.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order on which the hold was released.
- `userErrors`: `[FulfillmentOrderReleaseHoldUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderReleaseHoldPayload](../types/objects/FulfillmentOrderReleaseHoldPayload.md)
- [FulfillmentOrderReleaseHoldUserError](../types/objects/FulfillmentOrderReleaseHoldUserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderReleaseHold($id: ID!, $holdIds: [ID!], $externalId: String) {
  fulfillmentOrderReleaseHold(id: $id, holdIds: $holdIds, externalId: $externalId) {
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
