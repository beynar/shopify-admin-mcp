# Mutation: `fulfillmentServiceUpdate`

**Returns:** `FulfillmentServiceUpdatePayload`

Updates the [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) configuration, including its name, callback URL, and operational settings.

The mutation modifies how the fulfillment service handles inventory tracking, shipping requirements, and package tracking support.

> Note:
> To update the physical address or other location details of the fulfillment service, use the [`locationEdit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit) mutation instead.

Learn more about [editing fulfillment service locations](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

## Arguments

- **`id`**: `ID!` — The id of the fulfillment service.
- **`name`**: `String` — The name of the fulfillment service.
- **`callbackUrl`**: `URL` — The URL to send requests for the fulfillment service.  If `callbackUrl` is provided: - Shopify queries the <code>callback_url/fetch_tracking_numbers</code> endpoint to retrieve tracking numbers     for orders, if `trackingSupport` is set to `true`. - Shopify queries the <code>callback_url/fetch_stock</code> endpoint to retrieve inventory levels,     if `inventoryManagement` is set to `true`. - Shopify uses the <code>callback_url/fulfillment_order_notification</code> endpoint to send     [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).  Otherwise, if no `callbackUrl` is provided you need to submit this information via the api: - For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services). - For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).
- **`trackingSupport`**: `Boolean` — Whether the fulfillment service provides tracking numbers for packages.  If `callbackUrl` is provided, Shopify will periodically fetch tracking numbers via the callback endpoint.  If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
- **`inventoryManagement`**: `Boolean` — Whether the fulfillment service manages product inventory and provides updates to Shopify.  If `callbackUrl` is provided, Shopify will periodically fetch inventory levels via the callback endpoint.  If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).
- **`requiresShippingMethod`**: `Boolean` = `true` — Whether the fulfillment service requires products to be physically shipped.

## Payload Fields

- `fulfillmentService`: `FulfillmentService` — The updated fulfillment service.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentService](../types/objects/FulfillmentService.md)
- [FulfillmentServiceUpdatePayload](../types/objects/FulfillmentServiceUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentServiceUpdate($id: ID!, $name: String, $callbackUrl: URL, $trackingSupport: Boolean, $inventoryManagement: Boolean, $requiresShippingMethod: Boolean) {
  fulfillmentServiceUpdate(id: $id, name: $name, callbackUrl: $callbackUrl, trackingSupport: $trackingSupport, inventoryManagement: $inventoryManagement, requiresShippingMethod: $requiresShippingMethod) {
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
