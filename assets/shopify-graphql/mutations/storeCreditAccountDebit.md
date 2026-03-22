# Mutation: `storeCreditAccountDebit`

**Returns:** `StoreCreditAccountDebitPayload`

Creates a debit transaction that decreases the store credit account balance by the given amount.

## Arguments

- **`id`**: `ID!` — The ID of the store credit account or the ID of the account owner.
- **`debitInput`**: `StoreCreditAccountDebitInput!` — The input fields for a store credit account debit transaction.

## Payload Fields

- `storeCreditAccountTransaction`: `StoreCreditAccountDebitTransaction` — The store credit account transaction that was created.
- `userErrors`: `[StoreCreditAccountDebitUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [StoreCreditAccountDebitInput](../types/inputs/StoreCreditAccountDebitInput.md)
- [StoreCreditAccountDebitPayload](../types/objects/StoreCreditAccountDebitPayload.md)
- [StoreCreditAccountDebitTransaction](../types/objects/StoreCreditAccountDebitTransaction.md)
- [StoreCreditAccountDebitUserError](../types/objects/StoreCreditAccountDebitUserError.md)

## Example Mutation

```graphql
mutation StoreCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
  storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
    storeCreditAccountTransaction {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
