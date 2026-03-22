# Mutation: `companyContactRemoveFromCompany`

**Returns:** `CompanyContactRemoveFromCompanyPayload`

Removes a company contact from a Company.

## Arguments

- **`companyContactId`**: `ID!` — The ID of the company contact to remove from the Company.

## Payload Fields

- `removedCompanyContactId`: `ID` — The ID of the removed company contact.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContactRemoveFromCompanyPayload](../types/objects/CompanyContactRemoveFromCompanyPayload.md)

## Example Mutation

```graphql
mutation CompanyContactRemoveFromCompany($companyContactId: ID!) {
  companyContactRemoveFromCompany(companyContactId: $companyContactId) {
    removedCompanyContactId
    userErrors {
      field
      message
    }
  }
}
```
