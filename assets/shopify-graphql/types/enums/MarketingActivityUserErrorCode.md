# Enum: `MarketingActivityUserErrorCode`

Possible error codes that can be returned by `MarketingActivityUserError`.

## Values

- `INVALID` — The input value is invalid.
- `TAKEN` — The input value is already taken.
- `MARKETING_ACTIVITY_DOES_NOT_EXIST` — Marketing activity does not exist.
- `MARKETING_ACTIVITY_WITH_REMOTE_ID_ALREADY_EXISTS` — A marketing activity with the same remote ID already exists.
- `MARKETING_ACTIVITY_WITH_UTM_CAMPAIGN_ALREADY_EXISTS` — A marketing activity with the same UTM campaign, medium, and source already exists.
- `MARKETING_ACTIVITY_WITH_URL_PARAMETER_VALUE_ALREADY_EXISTS` — A marketing activity with the same URL parameter value already exists.
- `MARKETING_EVENT_DOES_NOT_EXIST` — Marketing activity is not valid, the associated marketing event does not exist.
- `CURRENCY_CODE_MISMATCH_INPUT` — All currency codes provided in the input need to match.
- `MARKETING_ACTIVITY_CURRENCY_CODE_MISMATCH` — The currency codes provided need to match the referenced marketing activity's currency code.
- `DELETE_JOB_FAILED_TO_ENQUEUE` — The job to delete all external activities failed to enqueue.
- `NON_HIERARCHIAL_REQUIRES_UTM_URL_PARAMETER` — Non-hierarchical marketing activities must have UTM parameters or a URL parameter value.
- `DELETE_JOB_ENQUEUED` — A mutation can not be ran because a job to delete all external activities has been enqueued, which happens either from calling the marketingActivitiesDeleteAllExternal mutation or as a result of an app uninstall.
- `ACTIVITY_NOT_EXTERNAL` — The marketing activity must be an external activity.
- `IMMUTABLE_CHANNEL_HANDLE` — The channel handle value cannot be modified.
- `IMMUTABLE_URL_PARAMETER` — The URL parameter value cannot be modified.
- `IMMUTABLE_UTM_PARAMETERS` — The UTM parameters cannot be modified.
- `IMMUTABLE_PARENT_ID` — The parent activity cannot be modified.
- `IMMUTABLE_HIERARCHY_LEVEL` — The hierarchy level cannot be modified.
- `INVALID_REMOTE_ID` — The remote ID does not correspond to an existing activity.
- `INVALID_CHANNEL_HANDLE` — The channel handle is not recognized.
- `INVALID_DELETE_ACTIVITY_EXTERNAL_ARGUMENTS` — Either the marketing activity ID or remote ID must be provided for the activity to be deleted.
- `INVALID_DELETE_ENGAGEMENTS_ARGUMENTS` — Either the channel_handle or delete_engagements_for_all_channels must be provided when deleting a marketing engagement.
- `INVALID_MARKETING_ACTIVITY_EXTERNAL_ARGUMENTS` — Either the marketing activity ID, remote ID, or UTM must be provided.
- `INVALID_MARKETING_ENGAGEMENT_ARGUMENTS` — For activity level engagement, either the marketing activity ID or remote ID must be provided. For channel level engagement, the channel handle must be provided.
- `INVALID_MARKETING_ENGAGEMENT_ARGUMENT_MISSING` — No identifier found. For activity level engagement, either the marketing activity ID or remote ID must be provided. For channel level engagement, the channel handle must be provided.
- `CANNOT_DELETE_ACTIVITY_WITH_CHILD_EVENTS` — This activity has child activities and thus cannot be deleted. Child activities must be deleted before a parent activity.
- `CANNOT_UPDATE_TACTIC_TO_STOREFRONT_APP` — The activity's tactic can not be updated to STOREFRONT_APP. This type of tactic can only be specified when creating a new activity.
- `CANNOT_UPDATE_TACTIC_IF_ORIGINALLY_STOREFRONT_APP` — The activity's tactic can not be updated from STOREFRONT_APP.
