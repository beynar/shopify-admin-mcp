# Mutation: `companyRevokeMainContact`

**Returns:** `CompanyRevokeMainContactPayload`

Revokes the main contact from the company.

## Arguments

- **`companyId`**: `ID!` — The ID of the company to revoke the main contact from.

## Payload Fields

- `company`: `Company` — The company from which the main contact is revoked.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [Company](../types/objects/Company.md)
- [CompanyRevokeMainContactPayload](../types/objects/CompanyRevokeMainContactPayload.md)

## Example Mutation

```graphql
mutation CompanyRevokeMainContact($companyId: ID!) {
  companyRevokeMainContact(companyId: $companyId) {
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
