# Mutation: `marketingActivityUpdateExternal`

**Returns:** `MarketingActivityUpdateExternalPayload`

Update an external marketing activity.

## Arguments

- **`input`**: `MarketingActivityUpdateExternalInput!` — The input field for updating an external marketing activity.
- **`marketingActivityId`**: `ID` — The ID of the marketing activity. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.
- **`remoteId`**: `String` — A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.
- **`utm`**: `UTMInput` — Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

## Payload Fields

- `marketingActivity`: `MarketingActivity` — The updated marketing activity.
- `userErrors`: `[MarketingActivityUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketingActivity](../types/objects/MarketingActivity.md)
- [MarketingActivityUpdateExternalInput](../types/inputs/MarketingActivityUpdateExternalInput.md)
- [MarketingActivityUpdateExternalPayload](../types/objects/MarketingActivityUpdateExternalPayload.md)
- [MarketingActivityUserError](../types/objects/MarketingActivityUserError.md)
- [UTMInput](../types/inputs/UTMInput.md)

## Example Mutation

```graphql
mutation MarketingActivityUpdateExternal($input: MarketingActivityUpdateExternalInput!, $marketingActivityId: ID, $remoteId: String, $utm: UTMInput) {
  marketingActivityUpdateExternal(input: $input, marketingActivityId: $marketingActivityId, remoteId: $remoteId, utm: $utm) {
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
