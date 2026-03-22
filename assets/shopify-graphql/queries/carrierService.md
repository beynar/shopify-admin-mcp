# Query: `carrierService`

**Returns:** `DeliveryCarrierService`

Returns a `DeliveryCarrierService` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `DeliveryCarrierService` to return.

## Return Type Fields

- `active`: `Boolean!` — Whether the carrier service is active.
- `availableServicesForCountries`: `[DeliveryAvailableService!]!` — The list of services offered for given destinations.
- `callbackUrl`: `URL` — The URL endpoint that Shopify needs to retrieve shipping rates.
- `formattedName`: `String` — The properly formatted name of the shipping service provider, ready to display.
- `icon`: `Image!` — The logo of the service provider.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String` — The name of the shipping service provider.
- `supportsServiceDiscovery`: `Boolean!` — Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples.

## Related Types

- [DeliveryAvailableService](../types/objects/DeliveryAvailableService.md)
- [DeliveryCarrierService](../types/objects/DeliveryCarrierService.md)
- [Image](../types/objects/Image.md)

## Example Query

```graphql
query CarrierService($id: ID!) {
  carrierService(id: $id) {
    active
    callbackUrl
    formattedName
    name
  }
}
```
