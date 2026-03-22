# Mutation: `fulfillmentServiceCreate`

**Returns:** `FulfillmentServiceCreatePayload`

Creates a fulfillment service.

## Fulfillment service location

When creating a fulfillment service, a new location will be automatically created on the shop
and will be associated with this fulfillment service.
This location will be named after the fulfillment service and inherit the shop's address.

If you are using API version `2023-10` or later, and you need to specify custom attributes for the fulfillment service location
(for example, to change its address to a country different from the shop's country),
use the
[LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit)
mutation after creating the fulfillment service.

## Arguments

- **`name`**: `String!` — The name of the fulfillment service.
- **`callbackUrl`**: `URL` — The URL to send requests for the fulfillment service.  If `callbackUrl` is provided: - Shopify queries the <code>callback_url/fetch_tracking_numbers</code> endpoint to retrieve tracking numbers     for orders, if `trackingSupport` is set to `true`. - Shopify queries the <code>callback_url/fetch_stock</code> endpoint to retrieve inventory levels,     if `inventoryManagement` is set to `true`. - Shopify uses the <code>callback_url/fulfillment_order_notification</code> endpoint to send     [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).  Otherwise, if no `callbackUrl` is provided you need to submit this information via the api: - For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services). - For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).
- **`trackingSupport`**: `Boolean` = `false` — Whether the fulfillment service provides tracking numbers for packages.  If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch tracking numbers via the callback endpoint.  If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
- **`inventoryManagement`**: `Boolean` = `false` — Whether the fulfillment service manages product inventory and provides updates to Shopify.  If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch inventory levels via the callback endpoint.  If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).
- **`requiresShippingMethod`**: `Boolean` = `true` — Whether the fulfillment service requires products to be physically shipped.

## Payload Fields

- `fulfillmentService`: `FulfillmentService` — The created fulfillment service.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentService](../types/objects/FulfillmentService.md)
- [FulfillmentServiceCreatePayload](../types/objects/FulfillmentServiceCreatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentServiceCreate($name: String!, $callbackUrl: URL, $trackingSupport: Boolean, $inventoryManagement: Boolean, $requiresShippingMethod: Boolean) {
  fulfillmentServiceCreate(name: $name, callbackUrl: $callbackUrl, trackingSupport: $trackingSupport, inventoryManagement: $inventoryManagement, requiresShippingMethod: $requiresShippingMethod) {
    fulfillmentService {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
