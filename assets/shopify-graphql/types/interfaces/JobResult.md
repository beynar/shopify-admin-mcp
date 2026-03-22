# Interface: `JobResult`

A job corresponds to some long running task that the client should poll for status.

## Fields

- `done`: `Boolean!` — This indicates if the job is still queued or has been run.
- `id`: `ID!` — A globally-unique ID that's returned when running an asynchronous mutation.

## Possible Types

- [CustomerSegmentMembersQuery](../../types/objects/CustomerSegmentMembersQuery.md)
