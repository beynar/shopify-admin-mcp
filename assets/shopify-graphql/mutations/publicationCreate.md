# Mutation: `publicationCreate`

**Returns:** `PublicationCreatePayload`

Creates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) customers can access through a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog).

### When to create a publication

Publications are **optional** for catalogs. Only create a publication if you need to control which products are visible in a specific catalog context. When a publication isn't associated with a catalog, product availability is determined by the sales channel.

**Create a publication if you need to:**
- Restrict product visibility to a subset of your inventory for a specific market or company location
- Publish different product selections to different contexts

**Do NOT create a publication if:**
- You want product availability determined by the sales channel
- You only need custom pricing (use a price list on the catalog instead)

### Configuration options

You can create an empty publication and add products later, or prepopulate it with all existing products. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate#arguments-input.fields.autoPublish) field determines whether the publication automatically adds newly created products.

## Arguments

- **`input`**: `PublicationCreateInput!` — The input fields to use when creating the publication.

## Payload Fields

- `publication`: `Publication` — The publication that's been created.
- `userErrors`: `[PublicationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Publication](../types/objects/Publication.md)
- [PublicationCreateInput](../types/inputs/PublicationCreateInput.md)
- [PublicationCreatePayload](../types/objects/PublicationCreatePayload.md)
- [PublicationUserError](../types/objects/PublicationUserError.md)

## Example Mutation

```graphql
mutation PublicationCreate($input: PublicationCreateInput!) {
  publicationCreate(input: $input) {
    publication {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
