# Object: `MarketingActivitiesDeleteAllExternalPayload`

Return type for `marketingActivitiesDeleteAllExternal` mutation.

## Fields

- `job`: `Job` — The asynchronous job that performs the deletion. The status of the job may be used to determine when it's safe again to create new activities.
- `userErrors`: `[MarketingActivityUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../../types/objects/Job.md)
- [MarketingActivityUserError](../../types/objects/MarketingActivityUserError.md)
