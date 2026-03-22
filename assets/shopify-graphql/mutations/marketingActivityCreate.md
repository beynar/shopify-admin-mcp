# Mutation: `marketingActivityCreate`

**Returns:** `MarketingActivityCreatePayload`

Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

## Arguments

- **`input`**: `MarketingActivityCreateInput!` — The Input of marketing activity create.

## Payload Fields

- `marketingActivity`: `MarketingActivity` — The created marketing activity.
- `redirectPath`: `String` — The path to return back to shopify admin from embedded editor.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketingActivity](../types/objects/MarketingActivity.md)
- [MarketingActivityCreateInput](../types/inputs/MarketingActivityCreateInput.md)
- [MarketingActivityCreatePayload](../types/objects/MarketingActivityCreatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation MarketingActivityCreate($input: MarketingActivityCreateInput!) {
  marketingActivityCreate(input: $input) {
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
