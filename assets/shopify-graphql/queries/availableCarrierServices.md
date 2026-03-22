# Query: `availableCarrierServices`

**Returns:** `[DeliveryCarrierServiceAndLocations!]!`

Returns a list of activated carrier services and associated shop locations that support them.

## Return Type Fields

- `carrierService`: `DeliveryCarrierService!` — The carrier service.
- `locations`: `[Location!]!` — The list of locations that support this carrier service.

## Related Types

- [DeliveryCarrierService](../types/objects/DeliveryCarrierService.md)
- [DeliveryCarrierServiceAndLocations](../types/objects/DeliveryCarrierServiceAndLocations.md)
- [Location](../types/objects/Location.md)

## Example Query

```graphql
query {
  availableCarrierServices {
  }
}
```
