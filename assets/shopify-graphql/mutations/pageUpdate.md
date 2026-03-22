# Mutation: `pageUpdate`

**Returns:** `PageUpdatePayload`

Updates an existing page's content and settings.

For example, merchants can update their "Shipping Policy" page when rates change, or refresh their "About Us" page with new team information.

Use the `pageUpdate` mutation to:
- Update page content and titles
- Modify publication status
- Change page handles for URL structure
- Adjust template settings

The mutation supports partial updates, allowing specific changes while preserving other page properties.

## Arguments

- **`id`**: `ID!` — The ID of the page to be updated.
- **`page`**: `PageUpdateInput!` — The properties of the page to be updated.

## Payload Fields

- `page`: `Page` — The page that was updated.
- `userErrors`: `[PageUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Page](../types/objects/Page.md)
- [PageUpdateInput](../types/inputs/PageUpdateInput.md)
- [PageUpdatePayload](../types/objects/PageUpdatePayload.md)
- [PageUpdateUserError](../types/objects/PageUpdateUserError.md)

## Example Mutation

```graphql
mutation PageUpdate($id: ID!, $page: PageUpdateInput!) {
  pageUpdate(id: $id, page: $page) {
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
