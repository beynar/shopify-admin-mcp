# Query: `job`

**Returns:** `Job`

Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes.

## Arguments

- **`id`**: `ID!` — ID of the job to query.

## Return Type Fields

- `done`: `Boolean!` — This indicates if the job is still queued or has been run.
- `id`: `ID!` — A globally-unique ID that's returned when running an asynchronous mutation.
- `query`: `QueryRoot` — This field will only resolve once the job is done. Can be used to ask for object(s) that have been changed by the job.

## Related Types

- [Job](../types/objects/Job.md)
- [QueryRoot](../types/objects/QueryRoot.md)

## Example Query

```graphql
query Job($id: ID!) {
  job(id: $id) {
    done
  }
}
```
