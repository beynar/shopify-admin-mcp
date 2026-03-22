# Mutation: `publicationUpdate`

**Returns:** `PublicationUpdatePayload`

Updates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

You can add or remove [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) from the publication, with a maximum of 50 items per operation. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate#arguments-input.fields.autoPublish) field determines whether new products automatically display in this publication.

## Arguments

- **`id`**: `ID!` — The ID of the publication to update.
- **`input`**: `PublicationUpdateInput!` — The input fields to use when updating the publication.

## Payload Fields

- `publication`: `Publication` — The publication that's been updated.
- `userErrors`: `[PublicationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Publication](../types/objects/Publication.md)
- [PublicationUpdateInput](../types/inputs/PublicationUpdateInput.md)
- [PublicationUpdatePayload](../types/objects/PublicationUpdatePayload.md)
- [PublicationUserError](../types/objects/PublicationUserError.md)

## Example Mutation

```graphql
mutation PublicationUpdate($id: ID!, $input: PublicationUpdateInput!) {
  publicationUpdate(id: $id, input: $input) {
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
