# Mutation: `companyContactUpdate`

**Returns:** `CompanyContactUpdatePayload`

Updates a company contact.

## Arguments

- **`companyContactId`**: `ID!` — The ID of the company contact to be updated.
- **`input`**: `CompanyContactInput!` — The fields to use to update the company contact.

## Payload Fields

- `companyContact`: `CompanyContact` — The updated company contact.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContact](../types/objects/CompanyContact.md)
- [CompanyContactInput](../types/inputs/CompanyContactInput.md)
- [CompanyContactUpdatePayload](../types/objects/CompanyContactUpdatePayload.md)

## Example Mutation

```graphql
mutation CompanyContactUpdate($companyContactId: ID!, $input: CompanyContactInput!) {
  companyContactUpdate(companyContactId: $companyContactId, input: $input) {
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
