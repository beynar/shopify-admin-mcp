# Mutation: `companyAssignCustomerAsContact`

**Returns:** `CompanyAssignCustomerAsContactPayload`

Adds an existing [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) as a contact to a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company).  Companies are business entities that make purchases from the merchant's store. Use this mutation when you have a customer who needs to be associated with a B2B company to make purchases on behalf of that company.

The mutation returns the newly created [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) that links the customer to the company. After assignment, the customer becomes a company contact who can place orders on behalf of the company with access to any catalogs, pricing, and payment terms configured for the company's locations.

## Arguments

- **`companyId`**: `ID!` — The ID of the company to assign the contact to.
- **`customerId`**: `ID!` — The ID of the customer to assign as the contact.

## Payload Fields

- `companyContact`: `CompanyContact` — The created company contact.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyAssignCustomerAsContactPayload](../types/objects/CompanyAssignCustomerAsContactPayload.md)
- [CompanyContact](../types/objects/CompanyContact.md)

## Example Mutation

```graphql
mutation CompanyAssignCustomerAsContact($companyId: ID!, $customerId: ID!) {
  companyAssignCustomerAsContact(companyId: $companyId, customerId: $customerId) {
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
