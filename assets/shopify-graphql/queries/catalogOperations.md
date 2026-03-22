# Query: `catalogOperations`

**Returns:** `[ResourceOperation!]!`

Returns the most recent catalog operations for the shop.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.
- `processedRowCount`: `Int` — The count of processed rows, summing imported, failed, and skipped rows.
- `rowCount`: `RowCount` — Represents a rows objects within this background operation.
- `status`: `ResourceOperationStatus!` — The status of this operation.

## Related Types

- [ResourceOperation](../types/interfaces/ResourceOperation.md)
- [ResourceOperationStatus](../types/enums/ResourceOperationStatus.md)
- [RowCount](../types/objects/RowCount.md)

## Example Query

```graphql
query {
  catalogOperations {
    processedRowCount
  }
}
```
