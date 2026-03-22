# Query: `reverseDelivery`

**Returns:** `ReverseDelivery`

Lookup a reverse delivery by ID.

## Arguments

- **`id`**: `ID!` — The ID of the ReverseDelivery to return.

## Return Type Fields

- `deliverable`: `ReverseDeliveryDeliverable` — The deliverable associated with the reverse delivery.
- `id`: `ID!` — The ID of the reverse delivery.
- `reverseDeliveryLineItems`: `ReverseDeliveryLineItemConnection!` — The reverse delivery line items attached to the reverse delivery.
- `reverseFulfillmentOrder`: `ReverseFulfillmentOrder!` — The `ReverseFulfillmentOrder` associated with the reverse delivery.

## Related Types

- [ReverseDelivery](../types/objects/ReverseDelivery.md)
- [ReverseDeliveryDeliverable](../types/unions/ReverseDeliveryDeliverable.md)
- [ReverseFulfillmentOrder](../types/objects/ReverseFulfillmentOrder.md)

## Example Query

```graphql
query ReverseDelivery($id: ID!) {
  reverseDelivery(id: $id) {
  }
}
```
