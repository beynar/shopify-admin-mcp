# Query: `reverseFulfillmentOrder`

**Returns:** `ReverseFulfillmentOrder`

Lookup a reverse fulfillment order by ID.

## Arguments

- **`id`**: `ID!` — The ID of the reverse fulfillment order to return.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.
- `lineItems`: `ReverseFulfillmentOrderLineItemConnection!` — The list of reverse fulfillment order line items for the reverse fulfillment order.
- `order`: `Order` — The order associated with the reverse fulfillment order.
- `reverseDeliveries`: `ReverseDeliveryConnection!` — The list of reverse deliveries for the reverse fulfillment order.
- `status`: `ReverseFulfillmentOrderStatus!` — The status of the reverse fulfillment order.
- `thirdPartyConfirmation`: `ReverseFulfillmentOrderThirdPartyConfirmation` — The current confirmation for the reverse fulfillment order from a third-party logistics service.

## Related Types

- [Order](../types/objects/Order.md)
- [ReverseFulfillmentOrder](../types/objects/ReverseFulfillmentOrder.md)
- [ReverseFulfillmentOrderStatus](../types/enums/ReverseFulfillmentOrderStatus.md)
- [ReverseFulfillmentOrderThirdPartyConfirmation](../types/objects/ReverseFulfillmentOrderThirdPartyConfirmation.md)

## Example Query

```graphql
query ReverseFulfillmentOrder($id: ID!) {
  reverseFulfillmentOrder(id: $id) {
  }
}
```
