# Mutation: `companyContactCreate`

**Returns:** `CompanyContactCreatePayload`

Creates a company contact and the associated customer.

## Arguments

- **`companyId`**: `ID!` — The ID of the company that the company contact belongs to.
- **`input`**: `CompanyContactInput!` — The fields to use to create the company contact.

## Payload Fields

- `companyContact`: `CompanyContact` — The created company contact.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContact](../types/objects/CompanyContact.md)
- [CompanyContactCreatePayload](../types/objects/CompanyContactCreatePayload.md)
- [CompanyContactInput](../types/inputs/CompanyContactInput.md)

## Example Mutation

```graphql
mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
  companyContactCreate(companyId: $companyId, input: $input) {
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
