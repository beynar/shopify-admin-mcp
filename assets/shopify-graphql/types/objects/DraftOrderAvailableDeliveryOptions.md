# Object: `DraftOrderAvailableDeliveryOptions`

The available delivery options for a draft order.

## Fields

- `availableLocalDeliveryRates`: `[DraftOrderShippingRate!]!` — The available local delivery rates for the draft order. Requires a customer with a valid shipping address and at least one line item.
- `availableLocalPickupOptions`: `[PickupInStoreLocation!]!` — The available local pickup options for the draft order. Requires at least one line item.
- `availableShippingRates`: `[DraftOrderShippingRate!]!` — The available shipping rates for the draft order. Requires a customer with a valid shipping address and at least one line item.
- `pageInfo`: `PageInfo!` — Returns information about pagination of local pickup options.

## Related Types

- [DraftOrderShippingRate](../../types/objects/DraftOrderShippingRate.md)
- [PageInfo](../../types/objects/PageInfo.md)
- [PickupInStoreLocation](../../types/objects/PickupInStoreLocation.md)
