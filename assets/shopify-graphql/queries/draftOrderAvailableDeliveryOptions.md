# Query: `draftOrderAvailableDeliveryOptions`

**Returns:** `DraftOrderAvailableDeliveryOptions!`

Available delivery options for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) based on the provided input. The query returns shipping rates, local delivery rates, and pickup locations that merchants can choose from when creating draft orders.

Accepts draft order details including [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for shipping, and discounts to determine which delivery methods are available. Pagination parameters control the number of local pickup options returned.

## Arguments

- **`input`**: `DraftOrderAvailableDeliveryOptionsInput!` — The fields for the draft order.
- **`search`**: `String` — The search term for the delivery options.
- **`localPickupFrom`**: `Int` — The offset for the local pickup options.
- **`localPickupCount`**: `Int` — The number of local pickup options required.
- **`sessionToken`**: `String` — Unique token used to trace execution and help optimize the calculation.

## Return Type Fields

- `availableLocalDeliveryRates`: `[DraftOrderShippingRate!]!` — The available local delivery rates for the draft order. Requires a customer with a valid shipping address and at least one line item.
- `availableLocalPickupOptions`: `[PickupInStoreLocation!]!` — The available local pickup options for the draft order. Requires at least one line item.
- `availableShippingRates`: `[DraftOrderShippingRate!]!` — The available shipping rates for the draft order. Requires a customer with a valid shipping address and at least one line item.
- `pageInfo`: `PageInfo!` — Returns information about pagination of local pickup options.

## Related Types

- [DraftOrderAvailableDeliveryOptions](../types/objects/DraftOrderAvailableDeliveryOptions.md)
- [DraftOrderAvailableDeliveryOptionsInput](../types/inputs/DraftOrderAvailableDeliveryOptionsInput.md)
- [DraftOrderShippingRate](../types/objects/DraftOrderShippingRate.md)
- [PageInfo](../types/objects/PageInfo.md)
- [PickupInStoreLocation](../types/objects/PickupInStoreLocation.md)

## Example Query

```graphql
query DraftOrderAvailableDeliveryOptions($input: DraftOrderAvailableDeliveryOptionsInput!, $search: String, $localPickupFrom: Int, $localPickupCount: Int, $sessionToken: String) {
  draftOrderAvailableDeliveryOptions(input: $input, search: $search, localPickupFrom: $localPickupFrom, localPickupCount: $localPickupCount, sessionToken: $sessionToken) {
  }
}
```
