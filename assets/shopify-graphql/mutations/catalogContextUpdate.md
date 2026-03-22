# Mutation: `catalogContextUpdate`

**Returns:** `CatalogContextUpdatePayload`

Modifies which contexts, like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation), can access a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). You can add or remove contexts to control where the catalog's products and prices are available.

Learn more about [managing catalog contexts](https://shopify.dev/docs/apps/build/markets/new-markets/catalogs) and [managing B2B catalogs](https://shopify.dev/docs/apps/build/b2b/manage-catalogs).

## Arguments

- **`catalogId`**: `ID!` — The ID of the catalog for which to update the context.
- **`contextsToAdd`**: `CatalogContextInput` — The contexts to add to the catalog.
- **`contextsToRemove`**: `CatalogContextInput` — The contexts to remove from the catalog.

## Payload Fields

- `catalog`: `Catalog` — The updated catalog.
- `userErrors`: `[CatalogUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Catalog](../types/interfaces/Catalog.md)
- [CatalogContextInput](../types/inputs/CatalogContextInput.md)
- [CatalogContextUpdatePayload](../types/objects/CatalogContextUpdatePayload.md)
- [CatalogUserError](../types/objects/CatalogUserError.md)

## Example Mutation

```graphql
mutation CatalogContextUpdate($catalogId: ID!, $contextsToAdd: CatalogContextInput, $contextsToRemove: CatalogContextInput) {
  catalogContextUpdate(catalogId: $catalogId, contextsToAdd: $contextsToAdd, contextsToRemove: $contextsToRemove) {
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
