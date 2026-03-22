# Input Object: `CatalogCreateInput`

The input fields required to create a catalog.

## Input Fields

- `title`: `String!` — The name of the catalog.
- `status`: `CatalogStatus!` — The status of the catalog.
- `context`: `CatalogContextInput!` — The context associated with the catalog.
- `priceListId`: `ID` — The ID of the price list to associate to the catalog.
- `publicationId`: `ID` — The ID of the publication to associate to the catalog. Only include this if you need to control which products are visible in the catalog. When omitted, product availability is determined by the sales channel.

## Related Types

- [CatalogContextInput](../../types/inputs/CatalogContextInput.md)
- [CatalogStatus](../../types/enums/CatalogStatus.md)
