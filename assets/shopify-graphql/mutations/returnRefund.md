# Mutation: `returnRefund`

**Returns:** `ReturnRefundPayload`

Creates a refund for items being returned when the return status is `OPEN` or `CLOSED`. This mutation processes the financial aspects of a return by refunding line items, shipping costs, and duties back to the customer.

## Arguments

- **`returnRefundInput`**: `ReturnRefundInput!` — The input fields to refund a return.

## Payload Fields

- `refund`: `Refund` — The created refund.
- `userErrors`: `[ReturnUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Refund](../types/objects/Refund.md)
- [ReturnRefundInput](../types/inputs/ReturnRefundInput.md)
- [ReturnRefundPayload](../types/objects/ReturnRefundPayload.md)
- [ReturnUserError](../types/objects/ReturnUserError.md)

## Example Mutation

```graphql
mutation ReturnRefund($returnRefundInput: ReturnRefundInput!) {
  returnRefund(returnRefundInput: $returnRefundInput) {
    refund {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
