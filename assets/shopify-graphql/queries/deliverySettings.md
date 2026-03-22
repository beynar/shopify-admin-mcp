# Query: `deliverySettings`

**Returns:** `DeliverySetting`

Returns the shop-wide shipping settings.

## Return Type Fields

- `legacyModeBlocked`: `DeliveryLegacyModeBlocked!` — Whether the shop is blocked from converting to full multi-location delivery profiles mode. If the shop is blocked, then the blocking reasons are also returned. Note: this field is effectively deprecated and will be removed in a future version of the API.
- `legacyModeProfiles`: `Boolean!` — Enables legacy compatability mode for the multi-location delivery profiles feature. Note: this field is effectively deprecated and will be removed in a future version of the API.

## Related Types

- [DeliveryLegacyModeBlocked](../types/objects/DeliveryLegacyModeBlocked.md)
- [DeliverySetting](../types/objects/DeliverySetting.md)

## Example Query

```graphql
query {
  deliverySettings {
    legacyModeProfiles
  }
}
```
