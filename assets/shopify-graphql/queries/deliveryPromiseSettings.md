# Query: `deliveryPromiseSettings`

**Returns:** `DeliveryPromiseSetting!`

Represents the delivery promise settings for a shop.

## Return Type Fields

- `deliveryDatesEnabled`: `Boolean!` — Whether delivery dates is enabled.
- `processingTime`: `String` — The number of business days required for processing the order before the package is handed off to the carrier. Expressed as an ISO8601 duration.

## Related Types

- [DeliveryPromiseSetting](../types/objects/DeliveryPromiseSetting.md)

## Example Query

```graphql
query {
  deliveryPromiseSettings {
    deliveryDatesEnabled
    processingTime
  }
}
```
