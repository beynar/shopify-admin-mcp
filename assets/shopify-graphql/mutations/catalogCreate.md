# Mutation: `catalogCreate`

**Returns:** `CatalogCreatePayload`

Creates a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) that controls product availability and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

### Publications and Price Lists

- **[`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)** objects control which products are visible in a catalog. Publications are **optional**. When a publication isn't associated with a catalog, product availability is determined by the sales channel.
- **[`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)** objects define custom pricing for products in a catalog.

You can optionally associate a publication and price list when creating the catalog, or add them later using separate mutations.

### When to use Publications

**Create a publication only if you need to:**
- Limit which products are visible in a specific context (e.g., show different products to different company locations or markets)
- Publish a curated subset of your product catalog

**Do NOT create a publication if:**
- You want product availability determined by the sales channel
- You only need to customize pricing (use a price list without a publication)

> **Important:** For company location catalogs that only require custom pricing, create the catalog with a price list but without a publication.

Learn more about [managing catalog contexts](https://shopify.dev/docs/apps/build/markets/new-markets/catalogs) and [using catalogs for different markets](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

## Arguments

- **`input`**: `CatalogCreateInput!` — The properties of the new catalog.

## Payload Fields

- `catalog`: `Catalog` — The newly created catalog.
- `userErrors`: `[CatalogUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Catalog](../types/interfaces/Catalog.md)
- [CatalogCreateInput](../types/inputs/CatalogCreateInput.md)
- [CatalogCreatePayload](../types/objects/CatalogCreatePayload.md)
- [CatalogUserError](../types/objects/CatalogUserError.md)

## Example Mutation

```graphql
mutation CatalogCreate($input: CatalogCreateInput!) {
  catalogCreate(input: $input) {
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
