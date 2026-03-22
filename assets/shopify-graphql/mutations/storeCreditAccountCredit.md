# Mutation: `storeCreditAccountCredit`

**Returns:** `StoreCreditAccountCreditPayload`

Adds funds to a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by creating a [`StoreCreditAccountCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction). The mutation accepts either a store credit account ID, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) ID, or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) ID. When you provide a customer or company location ID, it automatically creates an account if one doesn't exist for the specified currency.

Store credit accounts are currency-specific. A single owner can have multiple accounts, each holding a different currency. Use the most appropriate currency for the given store credit account owner.

Credits can optionally include an expiration date.

## Arguments

- **`id`**: `ID!` — The ID of the store credit account or the ID of the account owner.
- **`creditInput`**: `StoreCreditAccountCreditInput!` — The input fields for a store credit account credit transaction.

## Payload Fields

- `storeCreditAccountTransaction`: `StoreCreditAccountCreditTransaction` — The store credit account transaction that was created.
- `userErrors`: `[StoreCreditAccountCreditUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [StoreCreditAccountCreditInput](../types/inputs/StoreCreditAccountCreditInput.md)
- [StoreCreditAccountCreditPayload](../types/objects/StoreCreditAccountCreditPayload.md)
- [StoreCreditAccountCreditTransaction](../types/objects/StoreCreditAccountCreditTransaction.md)
- [StoreCreditAccountCreditUserError](../types/objects/StoreCreditAccountCreditUserError.md)

## Example Mutation

```graphql
mutation StoreCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
  storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
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
