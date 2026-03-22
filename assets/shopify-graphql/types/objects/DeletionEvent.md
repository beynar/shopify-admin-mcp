# Object: `DeletionEvent`

Deletion events chronicle the destruction of resources (e.g. products and collections).
Once deleted, the deletion event is the only trace of the original's existence,
as the resource itself has been removed and can no longer be accessed.

## Fields

- `occurredAt`: `DateTime!` — The date and time when the deletion event for the related resource was generated.
- `subjectId`: `ID!` — The ID of the resource that was deleted.
- `subjectType`: `DeletionEventSubjectType!` — The type of resource that was deleted.

## Related Types

- [DeletionEventSubjectType](../../types/enums/DeletionEventSubjectType.md)
