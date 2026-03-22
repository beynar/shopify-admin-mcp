# Interface: `ResourceOperation`

Represents a merchandising background operation interface.

## Fields

- `id`: `ID!` — A globally-unique ID.
- `processedRowCount`: `Int` — The count of processed rows, summing imported, failed, and skipped rows.
- `rowCount`: `RowCount` — Represents a rows objects within this background operation.
- `status`: `ResourceOperationStatus!` — The status of this operation.

## Possible Types

- [AddAllProductsOperation](../../types/objects/AddAllProductsOperation.md)
- [CatalogCsvOperation](../../types/objects/CatalogCsvOperation.md)
- [PublicationResourceOperation](../../types/objects/PublicationResourceOperation.md)

## Related Types

- [ResourceOperationStatus](../../types/enums/ResourceOperationStatus.md)
- [RowCount](../../types/objects/RowCount.md)
