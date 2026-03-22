# Mutation: `catalogUpdate`

**Returns:** `CatalogUpdatePayload`

Updates an existing [catalog's](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) configuration. Catalogs control product publishing and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

You can modify the catalog's title, status, and associated context. You can also update the [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) that determines pricing adjustments or the [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which products customers see.

## Arguments

- **`id`**: `ID!` — The ID of the catalog to update.
- **`input`**: `CatalogUpdateInput!` — The properties of the updated catalog.

## Payload Fields

- `catalog`: `Catalog` — The updated catalog.
- `userErrors`: `[CatalogUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Catalog](../types/interfaces/Catalog.md)
- [CatalogUpdateInput](../types/inputs/CatalogUpdateInput.md)
- [CatalogUpdatePayload](../types/objects/CatalogUpdatePayload.md)
- [CatalogUserError](../types/objects/CatalogUserError.md)

## Example Mutation

```graphql
mutation CatalogUpdate($id: ID!, $input: CatalogUpdateInput!) {
  catalogUpdate(id: $id, input: $input) {
    catalog {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
