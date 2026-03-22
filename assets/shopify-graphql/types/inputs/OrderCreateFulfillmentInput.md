# Input Object: `OrderCreateFulfillmentInput`

The input fields for a fulfillment to create for an order.

## Input Fields

- `locationId`: `ID!` — The ID of the location to fulfill the order from.
- `originAddress`: `FulfillmentOriginAddressInput` — The address at which the fulfillment occurred.
- `notifyCustomer`: `Boolean` = `false` — Whether the customer should be notified of changes with the fulfillment.
- `shipmentStatus`: `FulfillmentEventStatus` — The status of the shipment.
- `trackingNumber`: `String` — The tracking number of the fulfillment.
- `trackingCompany`: `String` — The name of the tracking company.

## Related Types

- [FulfillmentEventStatus](../../types/enums/FulfillmentEventStatus.md)
- [FulfillmentOriginAddressInput](../../types/inputs/FulfillmentOriginAddressInput.md)
