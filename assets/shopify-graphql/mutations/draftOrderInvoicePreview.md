# Mutation: `draftOrderInvoicePreview`

**Returns:** `DraftOrderInvoicePreviewPayload`

Previews a draft order invoice email.

## Arguments

- **`id`**: `ID!` — Specifies the draft order invoice email to preview.
- **`email`**: `EmailInput` — Specifies the draft order invoice email fields.

## Payload Fields

- `previewHtml`: `HTML` — The draft order invoice email rendered as HTML to allow previewing.
- `previewSubject`: `HTML` — The subject preview for the draft order invoice email.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrderInvoicePreviewPayload](../types/objects/DraftOrderInvoicePreviewPayload.md)
- [EmailInput](../types/inputs/EmailInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderInvoicePreview($id: ID!, $email: EmailInput) {
  draftOrderInvoicePreview(id: $id, email: $email) {
    previewHtml
    previewSubject
    userErrors {
      field
      message
    }
  }
}
```
