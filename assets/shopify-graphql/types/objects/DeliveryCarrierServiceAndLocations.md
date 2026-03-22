# Object: `DeliveryCarrierServiceAndLocations`

Links a [`DeliveryCarrierService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService) with the associated shop [locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where it can calculate shipping rates. Each pairing indicates the locations that can use a specific carrier service for real-time rate calculations during checkout.

The carrier service provides the shipping rate calculation logic, while the locations represent physical or virtual fulfillment points that can ship orders using that service.

## Fields

- `carrierService`: `DeliveryCarrierService!` — The carrier service.
- `locations`: `[Location!]!` — The list of locations that support this carrier service.

## Related Types

- [DeliveryCarrierService](../../types/objects/DeliveryCarrierService.md)
- [Location](../../types/objects/Location.md)
