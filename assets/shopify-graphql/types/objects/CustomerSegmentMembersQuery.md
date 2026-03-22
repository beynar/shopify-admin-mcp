# Object: `CustomerSegmentMembersQuery`

A job to determine a list of members, such as customers, that are associated with an individual segment.

**Implements:** `JobResult`, `Node`

## Fields

- `currentCount`: `Int!` — The current total number of members in a given segment.
- `done`: `Boolean!` — This indicates if the job is still queued or has been run.
- `id`: `ID!` — A globally-unique ID that's returned when running an asynchronous mutation.
