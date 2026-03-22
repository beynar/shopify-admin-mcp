# Mutation: `marketingActivityUpsertExternal`

**Returns:** `MarketingActivityUpsertExternalPayload`

Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

## Arguments

- **`input`**: `MarketingActivityUpsertExternalInput!` — The input field for creating or updating an external marketing activity.

## Payload Fields

- `marketingActivity`: `MarketingActivity` — The external marketing activity that was created or updated.
- `userErrors`: `[MarketingActivityUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketingActivity](../types/objects/MarketingActivity.md)
- [MarketingActivityUpsertExternalInput](../types/inputs/MarketingActivityUpsertExternalInput.md)
- [MarketingActivityUpsertExternalPayload](../types/objects/MarketingActivityUpsertExternalPayload.md)
- [MarketingActivityUserError](../types/objects/MarketingActivityUserError.md)

## Example Mutation

```graphql
mutation MarketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
  marketingActivityUpsertExternal(input: $input) {
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
