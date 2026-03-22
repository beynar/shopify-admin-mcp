# Mutation: `marketingActivityCreateExternal`

**Returns:** `MarketingActivityCreateExternalPayload`

Creates a new external marketing activity.

## Arguments

- **`input`**: `MarketingActivityCreateExternalInput!` — The input field for creating an external marketing activity.

## Payload Fields

- `marketingActivity`: `MarketingActivity` — The external marketing activity that was created.
- `userErrors`: `[MarketingActivityUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketingActivity](../types/objects/MarketingActivity.md)
- [MarketingActivityCreateExternalInput](../types/inputs/MarketingActivityCreateExternalInput.md)
- [MarketingActivityCreateExternalPayload](../types/objects/MarketingActivityCreateExternalPayload.md)
- [MarketingActivityUserError](../types/objects/MarketingActivityUserError.md)

## Example Mutation

```graphql
mutation MarketingActivityCreateExternal($input: MarketingActivityCreateExternalInput!) {
  marketingActivityCreateExternal(input: $input) {
    marketingActivity {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
