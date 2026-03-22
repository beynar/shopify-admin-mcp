# Query: `storeCreditAccount`

**Returns:** `StoreCreditAccount`

Retrieves a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by ID. Store credit accounts hold monetary balances that account owners can use at checkout. The owner is either a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

## Arguments

- **`id`**: `ID!` — The ID of the store credit account to return.

## Return Type Fields

- `balance`: `MoneyV2!` — The current balance of the store credit account.
- `id`: `ID!` — A globally-unique ID.
- `owner`: `HasStoreCreditAccounts!` — The owner of the store credit account.
- `transactions`: `StoreCreditAccountTransactionConnection!` — The transaction history of the store credit account.

## Related Types

- [HasStoreCreditAccounts](../types/interfaces/HasStoreCreditAccounts.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [StoreCreditAccount](../types/objects/StoreCreditAccount.md)

## Example Query

```graphql
query StoreCreditAccount($id: ID!) {
  storeCreditAccount(id: $id) {
  }
}
```
