# Mutation: `pageCreate`

**Returns:** `PageCreatePayload`

Creates a [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) for the online store.

Pages contain custom content like "About Us" or "Contact" information that merchants display outside their product catalog. The page requires a [`title`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.title) and can include HTML content, publishing settings, and custom [template suffixes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.templateSuffix). You can control visibility through the [`isPublished`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.isPublished) flag or schedule publication with a specific date.

The mutation returns the complete page object upon successful creation or validation errors if the input is invalid.

## Arguments

- **`page`**: `PageCreateInput!` — The properties of the new page.

## Payload Fields

- `page`: `Page` — The page that was created.
- `userErrors`: `[PageCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Page](../types/objects/Page.md)
- [PageCreateInput](../types/inputs/PageCreateInput.md)
- [PageCreatePayload](../types/objects/PageCreatePayload.md)
- [PageCreateUserError](../types/objects/PageCreateUserError.md)

## Example Mutation

```graphql
mutation PageCreate($page: PageCreateInput!) {
  pageCreate(page: $page) {
    page {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
