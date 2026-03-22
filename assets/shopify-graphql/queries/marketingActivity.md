# Query: `marketingActivity`

**Returns:** `MarketingActivity`

Returns a `MarketingActivity` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `MarketingActivity` to return.

## Return Type Fields

- `activityListUrl`: `URL` — The URL of the marketing activity listing page in the marketing section.
- `adSpend`: `MoneyV2` — The amount spent on the marketing activity.
- `app`: `App!` — The app which created this marketing activity.
- `appErrors`: `MarketingActivityExtensionAppErrors` — The errors generated when an app publishes the marketing activity.
- `budget`: `MarketingBudget` — The allocated budget for the marketing activity.
- `createdAt`: `DateTime!` — The date and time when the marketing activity was created.
- `formData`: `String` — The completed content in the marketing activity creation form.
- `hierarchyLevel`: `MarketingActivityHierarchyLevel` — The hierarchy level of the marketing activity.
- `id`: `ID!` — A globally-unique ID.
- `inMainWorkflowVersion`: `Boolean!` — Whether the marketing activity is in the main workflow version of the marketing automation.
- `isExternal`: `Boolean!` — The marketing activity represents an external marketing activity.
- `marketingChannelType`: `MarketingChannel!` — The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
- `marketingEvent`: `MarketingEvent` — Associated marketing event of this marketing activity.
- `parentActivityId`: `ID` — ID of the parent activity of this marketing activity.
- `parentRemoteId`: `String` — ID of the parent activity of this marketing activity.
- `sourceAndMedium`: `String!` — A contextual description of the marketing activity based on the platform and tactic used.
- `status`: `MarketingActivityStatus!` — The current state of the marketing activity.
- `statusBadgeTypeV2`: `BadgeType` — The severity of the marketing activity's status.
- `statusLabel`: `String!` — The rendered status of the marketing activity.
- `statusTransitionedAt`: `DateTime` — The [date and time](
- `tactic`: `MarketingTactic!` — The method of marketing used for this marketing activity.
- `targetStatus`: `MarketingActivityStatus` — The status to which the marketing activity is currently transitioning.
- `title`: `String!` — The marketing activity's title, which is rendered on the marketing listing page.
- `updatedAt`: `DateTime!` — The date and time when the marketing activity was updated.
- `urlParameterValue`: `String` — The value portion of the URL query parameter used in attributing sessions to this activity.
- `utmParameters`: `UTMParameters` — The set of [Urchin Tracking Module](

## Related Types

- [App](../types/objects/App.md)
- [BadgeType](../types/enums/BadgeType.md)
- [MarketingActivity](../types/objects/MarketingActivity.md)
- [MarketingActivityExtensionAppErrors](../types/objects/MarketingActivityExtensionAppErrors.md)
- [MarketingActivityHierarchyLevel](../types/enums/MarketingActivityHierarchyLevel.md)
- [MarketingActivityStatus](../types/enums/MarketingActivityStatus.md)
- [MarketingActivityStatusBadgeType](../types/enums/MarketingActivityStatusBadgeType.md)
- [MarketingBudget](../types/objects/MarketingBudget.md)
- [MarketingChannel](../types/enums/MarketingChannel.md)
- [MarketingEvent](../types/objects/MarketingEvent.md)
- [MarketingTactic](../types/enums/MarketingTactic.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [UTMParameters](../types/objects/UTMParameters.md)

## Example Query

```graphql
query MarketingActivity($id: ID!) {
  marketingActivity(id: $id) {
    activityListUrl
    createdAt
    formData
    inMainWorkflowVersion
  }
}
```
