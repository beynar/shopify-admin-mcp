# Mutation: `transactionVoid`

**Returns:** `TransactionVoidPayload`

Trigger the voiding of an uncaptured authorization transaction.

## Arguments

- **`parentTransactionId`**: `ID!` — An uncaptured authorization transaction.

## Payload Fields

- `transaction`: `OrderTransaction` — The created void transaction.
- `userErrors`: `[TransactionVoidUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OrderTransaction](../types/objects/OrderTransaction.md)
- [TransactionVoidPayload](../types/objects/TransactionVoidPayload.md)
- [TransactionVoidUserError](../types/objects/TransactionVoidUserError.md)

## Example Mutation

```graphql
mutation TransactionVoid($parentTransactionId: ID!) {
  transactionVoid(parentTransactionId: $parentTransactionId) {
    transaction {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
