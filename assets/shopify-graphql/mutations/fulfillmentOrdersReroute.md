# Mutation: `fulfillmentOrdersReroute`

**Returns:** `FulfillmentOrdersReroutePayload`

Route the fulfillment orders to an alternative location, according to the shop's order routing settings. This involves:
* Finding an alternate location that can fulfill the fulfillment orders.
* Assigning the fulfillment orders to the new location.

## Arguments

- **`fulfillmentOrderIds`**: `[ID!]!` — The list of IDs of the fulfillment orders.
- **`includedLocationIds`**: `[ID!]` — The list of IDs of the locations to include for rerouting. By default, all locations are included.
- **`excludedLocationIds`**: `[ID!]` — The list of IDs of the locations to exclude for rerouting. Excluded locations specified here take precedence over included locations provided through included_location_ids.

## Payload Fields

- `movedFulfillmentOrders`: `[FulfillmentOrder!]` — The fulfillment orders which contains the moved line items.
- `userErrors`: `[FulfillmentOrdersRerouteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrdersReroutePayload](../types/objects/FulfillmentOrdersReroutePayload.md)
- [FulfillmentOrdersRerouteUserError](../types/objects/FulfillmentOrdersRerouteUserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrdersReroute($fulfillmentOrderIds: [ID!]!, $includedLocationIds: [ID!], $excludedLocationIds: [ID!]) {
  fulfillmentOrdersReroute(fulfillmentOrderIds: $fulfillmentOrderIds, includedLocationIds: $includedLocationIds, excludedLocationIds: $excludedLocationIds) {
    movedFulfillmentOrders {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
