# Mutation: `fulfillmentEventCreate`

**Returns:** `FulfillmentEventCreatePayload`

Creates a [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) to track the shipment status and location of items that have shipped. Events capture status updates like carrier pickup, in transit, out for delivery, or delivered.

Each event records the timestamp and current status of the [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). You can include optional details such as the location where the event occurred, estimated arrival time, and messages for tracking purposes.

## Arguments

- **`fulfillmentEvent`**: `FulfillmentEventInput!` — The input fields used to create a fulfillment event for a fulfillment.

## Payload Fields

- `fulfillmentEvent`: `FulfillmentEvent` — The created fulfillment event.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentEvent](../types/objects/FulfillmentEvent.md)
- [FulfillmentEventCreatePayload](../types/objects/FulfillmentEventCreatePayload.md)
- [FulfillmentEventInput](../types/inputs/FulfillmentEventInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
  fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
    fulfillmentEvent {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
