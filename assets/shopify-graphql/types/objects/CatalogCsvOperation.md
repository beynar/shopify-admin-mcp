# Object: `CatalogCsvOperation`

A catalog csv operation represents a CSV file import.

**Implements:** `Node`, `ResourceOperation`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `processedRowCount`: `Int` — The count of processed rows, summing imported, failed, and skipped rows.
- `rowCount`: `RowCount` — Represents a rows objects within this background operation.
- `status`: `ResourceOperationStatus!` — The status of this operation.

## Related Types

- [ResourceOperationStatus](../../types/enums/ResourceOperationStatus.md)
- [RowCount](../../types/objects/RowCount.md)
