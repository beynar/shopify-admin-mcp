# Mutation: `returnLineItemRemoveFromReturn`

**Returns:** `ReturnLineItemRemoveFromReturnPayload`

Removes return lines from a return.

## Arguments

- **`returnId`**: `ID!` — The ID of the return for line item removal.
- **`returnLineItems`**: `[ReturnLineItemRemoveFromReturnInput!]!` — The return line items to remove from the return.

## Payload Fields

- `return`: `Return` — The modified return.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Return](../types/objects/Return.md)
- [ReturnLineItemRemoveFromReturnInput](../types/inputs/ReturnLineItemRemoveFromReturnInput.md)
- [ReturnLineItemRemoveFromReturnPayload](../types/objects/ReturnLineItemRemoveFromReturnPayload.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnLineItemRemoveFromReturn($returnId: ID!, $returnLineItems: [ReturnLineItemRemoveFromReturnInput!]!) {
  returnLineItemRemoveFromReturn(returnId: $returnId, returnLineItems: $returnLineItems) {
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
