# Object: `LocationSnapshot`

A snapshot of location details including name and address captured at a specific point in time. Refer to the parent model to know the lifecycle.

## Fields

- `address`: `LocationAddress!` — The address details of the location as they were when the snapshot was recorded.
- `location`: `Location` — A reference to the live Location object, if it still exists and is accessible. This provides current details of the location, which may differ from the snapshotted name and address.
- `name`: `String!` — The name of the location as it was when the snapshot was recorded.
- `snapshottedAt`: `DateTime!` — The date and time when these snapshot details (name and address) were recorded.

## Related Types

- [Location](../../types/objects/Location.md)
- [LocationAddress](../../types/objects/LocationAddress.md)
