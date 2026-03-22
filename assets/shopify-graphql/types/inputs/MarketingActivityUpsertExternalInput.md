# Input Object: `MarketingActivityUpsertExternalInput`

The input fields for creating or updating an externally-managed marketing activity.

## Input Fields

- `title`: `String!` — The title of the marketing activity.
- `utm`: `UTMInput` — Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Either the URL parameter value or UTM can be set, but not both.
- `budget`: `MarketingActivityBudgetInput` — The budget for this marketing activity.
- `adSpend`: `MoneyInput` — The amount spent on the marketing activity.
- `remoteId`: `String!` — A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems.
- `status`: `MarketingActivityExternalStatus!` — The status of the marketing activity.
- `remoteUrl`: `URL!` — The URL for viewing and/or managing the activity outside of Shopify.
- `remotePreviewImageUrl`: `URL` — The URL for a preview image that's used for the marketing activity.
- `tactic`: `MarketingTactic!` — The method of marketing used for this marketing activity. The marketing tactic determines which default fields are included in the marketing activity.
- `marketingChannelType`: `MarketingChannel!` — The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
- `referringDomain`: `String` — The domain from which ad clicks are forwarded to the shop.
- `channelHandle`: `String` — The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager.
- `scheduledStart`: `DateTime` — The date and time at which the activity is scheduled to start.
- `scheduledEnd`: `DateTime` — The date and time at which the activity is scheduled to end.
- `start`: `DateTime` — The date and time at which the activity started. On creation, if this field is omitted or set to `null`, the current time will be used.
- `end`: `DateTime` — The date and time at which the activity started. On creation, if this field is omitted or set to `null`, the current time will be used if the status is set to `INACTIVE` or `DELETED_EXTERNALLY` .
- `urlParameterValue`: `String` — Value for a query parameter that gets inserted into storefront URLs for matching storefront traffic to this activity. This feature is currently available on a limited basis to some partners only. UTMs should continue to be used for most partners. Both the URL parameter value and UTM parameters can be set.
- `parentRemoteId`: `String` — The remote ID for the parent marketing activity, if creating hierarchical activities.
- `hierarchyLevel`: `MarketingActivityHierarchyLevel` — The hierarchy level of the activity within a campaign. The hierarchy level can't be updated.

## Related Types

- [MarketingActivityBudgetInput](../../types/inputs/MarketingActivityBudgetInput.md)
- [MarketingActivityExternalStatus](../../types/enums/MarketingActivityExternalStatus.md)
- [MarketingActivityHierarchyLevel](../../types/enums/MarketingActivityHierarchyLevel.md)
- [MarketingChannel](../../types/enums/MarketingChannel.md)
- [MarketingTactic](../../types/enums/MarketingTactic.md)
- [MoneyInput](../../types/inputs/MoneyInput.md)
- [UTMInput](../../types/inputs/UTMInput.md)
