# Query: `financeAppAccessPolicy`

**Returns:** `FinanceAppAccessPolicy!`

Returns the access policy for a finance app .

## Return Type Fields

- `access`: `[BankingFinanceAppAccess!]!` — Current shop staff's access within the app.

## Related Types

- [BankingFinanceAppAccess](../types/enums/BankingFinanceAppAccess.md)
- [FinanceAppAccessPolicy](../types/objects/FinanceAppAccessPolicy.md)

## Example Query

```graphql
query {
  financeAppAccessPolicy {
  }
}
```
