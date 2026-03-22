# Mutation: `marketingActivityUpdate`

**Returns:** `MarketingActivityUpdatePayload`

Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

## Arguments

- **`input`**: `MarketingActivityUpdateInput!` — The Input of the marketing activity.

## Payload Fields

- `marketingActivity`: `MarketingActivity` — The updated marketing activity.
- `redirectPath`: `String` — The redirect path from the embedded editor to the Shopify admin.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketingActivity](../types/objects/MarketingActivity.md)
- [MarketingActivityUpdateInput](../types/inputs/MarketingActivityUpdateInput.md)
- [MarketingActivityUpdatePayload](../types/objects/MarketingActivityUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation MarketingActivityUpdate($input: MarketingActivityUpdateInput!) {
  marketingActivityUpdate(input: $input) {
    marketingActivity {
      id
    }
    redirectPath
    userErrors {
      field
      message
    }
  }
}
```
