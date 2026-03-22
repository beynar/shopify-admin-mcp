# Mutation: `reverseFulfillmentOrderDispose`

**Returns:** `ReverseFulfillmentOrderDisposePayload`

Disposes reverse fulfillment order line items.

## Arguments

- **`dispositionInputs`**: `[ReverseFulfillmentOrderDisposeInput!]!` — The input parameters required to dispose reverse fulfillment order line items.

## Payload Fields

- `reverseFulfillmentOrderLineItems`: `[ReverseFulfillmentOrderLineItem!]` — The disposed reverse fulfillment order line items.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ReturnUserError](../types/objects/ReturnUserError.md)
- [ReverseFulfillmentOrderDisposeInput](../types/inputs/ReverseFulfillmentOrderDisposeInput.md)
- [ReverseFulfillmentOrderDisposePayload](../types/objects/ReverseFulfillmentOrderDisposePayload.md)
- [ReverseFulfillmentOrderLineItem](../types/objects/ReverseFulfillmentOrderLineItem.md)

## Example Mutation

```graphql
mutation ReverseFulfillmentOrderDispose($dispositionInputs: [ReverseFulfillmentOrderDisposeInput!]!) {
  reverseFulfillmentOrderDispose(dispositionInputs: $dispositionInputs) {
    reverseFulfillmentOrderLineItems {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
