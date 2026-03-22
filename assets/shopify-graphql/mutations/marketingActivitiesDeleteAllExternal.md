# Mutation: `marketingActivitiesDeleteAllExternal`

**Returns:** `MarketingActivitiesDeleteAllExternalPayload`

Deletes all external marketing activities. Deletion is performed by a background job, as it may take a bit of time to complete if a large number of activities are to be deleted. Attempting to create or modify external activities before the job has completed will result in the create/update/upsert mutation returning an error.

## Payload Fields

- `job`: `Job` — The asynchronous job that performs the deletion. The status of the job may be used to determine when it's safe again to create new activities.
- `userErrors`: `[MarketingActivityUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [MarketingActivitiesDeleteAllExternalPayload](../types/objects/MarketingActivitiesDeleteAllExternalPayload.md)
- [MarketingActivityUserError](../types/objects/MarketingActivityUserError.md)

## Example Mutation

```graphql
mutation {
  marketingActivitiesDeleteAllExternal {
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
