# Mutation: `draftOrderInvoiceSend`

**Returns:** `DraftOrderInvoiceSendPayload`

Sends an invoice email for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). The invoice includes a secure checkout link for reviewing and paying for the order. Use the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend#arguments-email) argument to customize the email, such as the subject and message.

## Arguments

- **`id`**: `ID!` — Specifies the draft order to send the invoice for.
- **`email`**: `EmailInput` — Specifies the draft order invoice email fields.

## Payload Fields

- `draftOrder`: `DraftOrder` — The draft order an invoice email is sent for.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DraftOrder](../types/objects/DraftOrder.md)
- [DraftOrderInvoiceSendPayload](../types/objects/DraftOrderInvoiceSendPayload.md)
- [EmailInput](../types/inputs/EmailInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation DraftOrderInvoiceSend($id: ID!, $email: EmailInput) {
  draftOrderInvoiceSend(id: $id, email: $email) {
    draftOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
