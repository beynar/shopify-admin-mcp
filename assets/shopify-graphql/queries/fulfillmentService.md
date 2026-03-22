# Query: `fulfillmentService`

**Returns:** `FulfillmentService`

Returns a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) by its ID. The service can manage inventory, process fulfillment requests, and provide tracking details through callback endpoints or directly calling Shopify's APIs.

When you register a fulfillment service, Shopify automatically creates an associated [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where fulfillment order's can be assigned to be processed.

Learn more about [building fulfillment service apps](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

## Arguments

- **`id`**: `ID!` — The ID of the FulfillmentService to return.

## Return Type Fields

- `callbackUrl`: `URL` — The callback URL that the fulfillment service has registered for requests. The following considerations apply:
- `handle`: `String!` — Human-readable unique identifier for this fulfillment service.
- `id`: `ID!` — The ID of the fulfillment service.
- `inventoryManagement`: `Boolean!` — Whether the fulfillment service tracks product inventory and provides updates to Shopify.
- `location`: `Location` — Location associated with the fulfillment service.
- `requiresShippingMethod`: `Boolean!` — Whether the fulfillment service requires products to be physically shipped.
- `serviceName`: `String!` — The name of the fulfillment service as seen by merchants.
- `trackingSupport`: `Boolean!` — Whether the fulfillment service implemented the /fetch_tracking_numbers endpoint.
- `type`: `FulfillmentServiceType!` — Type associated with the fulfillment service.

## Related Types

- [FulfillmentService](../types/objects/FulfillmentService.md)
- [FulfillmentServiceType](../types/enums/FulfillmentServiceType.md)
- [Location](../types/objects/Location.md)

## Example Query

```graphql
query FulfillmentService($id: ID!) {
  fulfillmentService(id: $id) {
    callbackUrl
    handle
    inventoryManagement
    requiresShippingMethod
  }
}
```
