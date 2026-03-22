# Mutation: `customerSendAccountInviteEmail`

**Returns:** `CustomerSendAccountInviteEmailPayload`

Sends an email invitation for a customer to create a legacy customer account. The invitation lets customers set up their password and activate their account in the online store.

You can optionally customize the email content including the subject, sender, recipients, and message body. If you don't provide email customization, the store uses its default account invitation template.

> Note: The invite only works when legacy customer accounts are enabled on the shop.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer to whom an account invite email is to be sent.
- **`email`**: `EmailInput` — Specifies the account invite email fields.

## Payload Fields

- `customer`: `Customer` — The customer to whom an account invite email was sent.
- `userErrors`: `[CustomerSendAccountInviteEmailUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerSendAccountInviteEmailPayload](../types/objects/CustomerSendAccountInviteEmailPayload.md)
- [CustomerSendAccountInviteEmailUserError](../types/objects/CustomerSendAccountInviteEmailUserError.md)
- [EmailInput](../types/inputs/EmailInput.md)

## Example Mutation

```graphql
mutation CustomerSendAccountInviteEmail($customerId: ID!, $email: EmailInput) {
  customerSendAccountInviteEmail(customerId: $customerId, email: $email) {
    customer {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
