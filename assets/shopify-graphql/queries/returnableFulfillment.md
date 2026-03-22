# Query: `returnableFulfillment`

**Returns:** `ReturnableFulfillment`

Returns a `ReturnableFulfillment` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `ReturnableFulfillment` to return.

## Return Type Fields

- `fulfillment`: `Fulfillment!` — The fulfillment that the returnable fulfillment refers to.
- `id`: `ID!` — The unique ID of the Returnable Fulfillment.
- `returnableFulfillmentLineItems`: `ReturnableFulfillmentLineItemConnection!` — The list of returnable fulfillment line items.

## Related Types

- [Fulfillment](../types/objects/Fulfillment.md)
- [ReturnableFulfillment](../types/objects/ReturnableFulfillment.md)

## Example Query

```graphql
query ReturnableFulfillment($id: ID!) {
  returnableFulfillment(id: $id) {
  }
}
```
