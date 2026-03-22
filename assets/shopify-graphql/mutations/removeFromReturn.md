# Mutation: `removeFromReturn`

**Returns:** `RemoveFromReturnPayload`

Removes return and/or exchange lines from a return.

## Arguments

- **`returnId`**: `ID!` — The ID of the return for line item removal.
- **`returnLineItems`**: `[ReturnLineItemRemoveFromReturnInput!]` — The return line items to remove from the return.
- **`exchangeLineItems`**: `[ExchangeLineItemRemoveFromReturnInput!]` — The exchange line items to remove from the return.

## Payload Fields

- `return`: `Return` — The modified return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ExchangeLineItemRemoveFromReturnInput](../types/inputs/ExchangeLineItemRemoveFromReturnInput.md)
- [RemoveFromReturnPayload](../types/objects/RemoveFromReturnPayload.md)
- [Return](../types/objects/Return.md)
- [ReturnLineItemRemoveFromReturnInput](../types/inputs/ReturnLineItemRemoveFromReturnInput.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation RemoveFromReturn($returnId: ID!, $returnLineItems: [ReturnLineItemRemoveFromReturnInput!], $exchangeLineItems: [ExchangeLineItemRemoveFromReturnInput!]) {
  removeFromReturn(returnId: $returnId, returnLineItems: $returnLineItems, exchangeLineItems: $exchangeLineItems) {
    return {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
