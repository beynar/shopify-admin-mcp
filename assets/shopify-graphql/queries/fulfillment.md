# Query: `fulfillment`

**Returns:** `Fulfillment`

Retrieves a [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) by its ID. A fulfillment is a record that the merchant has completed their work required for one or more line items in an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). It includes tracking information, [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, and the status of the fulfillment.

Use this query to track the progress of shipped items, view tracking details, or check [fulfillment events](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) for example when a package is out for delivery or delivered.

## Arguments

- **`id`**: `ID!` — The ID of the Fulfillment to return.

## Return Type Fields

- `createdAt`: `DateTime!` — The date and time when the fulfillment was created.
- `deliveredAt`: `DateTime` — The date that this fulfillment was delivered.
- `displayStatus`: `FulfillmentDisplayStatus` — Human readable display status for this fulfillment.
- `estimatedDeliveryAt`: `DateTime` — The estimated date that this fulfillment will arrive.
- `events`: `FulfillmentEventConnection!` — The history of events associated with this fulfillment.
- `fulfillmentLineItems`: `FulfillmentLineItemConnection!` — List of the fulfillment's line items.
- `fulfillmentOrders`: `FulfillmentOrderConnection!` — A paginated list of fulfillment orders for the fulfillment.
- `id`: `ID!` — A globally-unique ID.
- `inTransitAt`: `DateTime` — The date and time when the fulfillment went into transit.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `location`: `Location` — The location that the fulfillment was processed at.
- `name`: `String!` — Human readable reference identifier for this fulfillment.
- `order`: `Order!` — The order for which the fulfillment was created.
- `originAddress`: `FulfillmentOriginAddress` — The address at which the fulfillment occurred. This field is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead.
- `requiresShipping`: `Boolean!` — Whether any of the line items in the fulfillment require shipping.
- `service`: `FulfillmentService` — Fulfillment service associated with the fulfillment.
- `status`: `FulfillmentStatus!` — The status of the fulfillment.
- `totalQuantity`: `Int!` — Sum of all line item quantities for the fulfillment.
- `trackingInfo`: `[FulfillmentTrackingInfo!]!` — Tracking information associated with the fulfillment,
- `updatedAt`: `DateTime!` — The date and time when the fulfillment was last modified.

## Related Types

- [Fulfillment](../types/objects/Fulfillment.md)
- [FulfillmentDisplayStatus](../types/enums/FulfillmentDisplayStatus.md)
- [FulfillmentOriginAddress](../types/objects/FulfillmentOriginAddress.md)
- [FulfillmentService](../types/objects/FulfillmentService.md)
- [FulfillmentStatus](../types/enums/FulfillmentStatus.md)
- [FulfillmentTrackingInfo](../types/objects/FulfillmentTrackingInfo.md)
- [Location](../types/objects/Location.md)
- [Order](../types/objects/Order.md)

## Example Query

```graphql
query Fulfillment($id: ID!) {
  fulfillment(id: $id) {
    createdAt
    deliveredAt
    estimatedDeliveryAt
    inTransitAt
  }
}
```
