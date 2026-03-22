# Mutation: `companyContactSendWelcomeEmail`

**Returns:** `CompanyContactSendWelcomeEmailPayload`

Sends the company contact a welcome email.

## Arguments

- **`companyContactId`**: `ID!` — The ID of the company contact to send welcome email to.
- **`email`**: `EmailInput` — The welcome email fields.

## Payload Fields

- `companyContact`: `CompanyContact` — The company contact to whom a welcome email was sent.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContact](../types/objects/CompanyContact.md)
- [CompanyContactSendWelcomeEmailPayload](../types/objects/CompanyContactSendWelcomeEmailPayload.md)
- [EmailInput](../types/inputs/EmailInput.md)

## Example Mutation

```graphql
mutation CompanyContactSendWelcomeEmail($companyContactId: ID!, $email: EmailInput) {
  companyContactSendWelcomeEmail(companyContactId: $companyContactId, email: $email) {
    companyContact {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
