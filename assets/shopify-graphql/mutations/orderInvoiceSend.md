# Mutation: `orderInvoiceSend`

**Returns:** `OrderInvoiceSendPayload`

Sends an email invoice for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

You can customize the email recipient, sender, and subject line using the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email) argument.

> Note:
> Use store or staff account email addresses for the [`from`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.from) and [`bcc`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.bcc) input fields.

## Arguments

- **`id`**: `ID!` — The order associated with the invoice.
- **`email`**: `EmailInput` — The email input fields for the order invoice. The `bcc` and `from` fields should be store or staff account emails.

## Payload Fields

- `order`: `Order` — The order associated with the invoice email.
- `userErrors`: `[OrderInvoiceSendUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [EmailInput](../types/inputs/EmailInput.md)
- [Order](../types/objects/Order.md)
- [OrderInvoiceSendPayload](../types/objects/OrderInvoiceSendPayload.md)
- [OrderInvoiceSendUserError](../types/objects/OrderInvoiceSendUserError.md)

## Example Mutation

```graphql
mutation OrderInvoiceSend($id: ID!, $email: EmailInput) {
  orderInvoiceSend(id: $id, email: $email) {
    order {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
