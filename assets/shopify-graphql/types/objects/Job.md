# Object: `Job`

A job corresponds to some long running task that the client should poll for status.

## Fields

- `done`: `Boolean!` — This indicates if the job is still queued or has been run.
- `id`: `ID!` — A globally-unique ID that's returned when running an asynchronous mutation.
- `query`: `QueryRoot` — This field will only resolve once the job is done. Can be used to ask for object(s) that have been changed by the job.

## Related Types

- [QueryRoot](../../types/objects/QueryRoot.md)
