# Input Object: `MarketingActivityUpdateExternalInput`

The input fields required to update an externally managed marketing activity.

## Input Fields

- `title`: `String` — The title of the marketing activity.
- `budget`: `MarketingActivityBudgetInput` — The budget for this marketing activity.
- `adSpend`: `MoneyInput` — The amount spent on the marketing activity.
- `remoteUrl`: `URL` — The URL for viewing and/or managing the activity outside of Shopify.
- `remotePreviewImageUrl`: `URL` — The URL for a preview image that's used for the marketing activity.
- `tactic`: `MarketingTactic` — The method of marketing used for this marketing activity. The marketing tactic determines which default fields are included in the marketing activity.
- `marketingChannelType`: `MarketingChannel` — The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
- `referringDomain`: `String` — The domain from which ad clicks are forwarded to the shop.
- `scheduledStart`: `DateTime` — The date and time at which the activity is scheduled to start.
- `scheduledEnd`: `DateTime` — The date and time at which the activity is scheduled to end.
- `start`: `DateTime` — The date and time at which the activity started.
- `end`: `DateTime` — The date and time at which the activity ended.
- `status`: `MarketingActivityExternalStatus` — The status of the marketing activity.

## Related Types

- [MarketingActivityBudgetInput](../../types/inputs/MarketingActivityBudgetInput.md)
- [MarketingActivityExternalStatus](../../types/enums/MarketingActivityExternalStatus.md)
- [MarketingChannel](../../types/enums/MarketingChannel.md)
- [MarketingTactic](../../types/enums/MarketingTactic.md)
- [MoneyInput](../../types/inputs/MoneyInput.md)
