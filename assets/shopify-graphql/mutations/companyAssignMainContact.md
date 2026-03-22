# Mutation: `companyAssignMainContact`

**Returns:** `CompanyAssignMainContactPayload`

Assigns the main contact for the company.

## Arguments

- **`companyId`**: `ID!` — The ID of the company to assign the main contact to.
- **`companyContactId`**: `ID!` — The ID of the company contact to be assigned as the main contact.

## Payload Fields

- `company`: `Company` — The company for which the main contact is assigned.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [Company](../types/objects/Company.md)
- [CompanyAssignMainContactPayload](../types/objects/CompanyAssignMainContactPayload.md)

## Example Mutation

```graphql
mutation CompanyAssignMainContact($companyId: ID!, $companyContactId: ID!) {
  companyAssignMainContact(companyId: $companyId, companyContactId: $companyContactId) {
    company {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
