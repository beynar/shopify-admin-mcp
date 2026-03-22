# Mutation: `companyContactRevokeRole`

**Returns:** `CompanyContactRevokeRolePayload`

Revokes a role on a company contact.

## Arguments

- **`companyContactId`**: `ID!` — The ID of the contact to revoke a role from.
- **`companyContactRoleAssignmentId`**: `ID!` — The ID of the role assignment to revoke from a contact.

## Payload Fields

- `revokedCompanyContactRoleAssignmentId`: `ID` — The role assignment that was revoked.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContactRevokeRolePayload](../types/objects/CompanyContactRevokeRolePayload.md)

## Example Mutation

```graphql
mutation CompanyContactRevokeRole($companyContactId: ID!, $companyContactRoleAssignmentId: ID!) {
  companyContactRevokeRole(companyContactId: $companyContactId, companyContactRoleAssignmentId: $companyContactRoleAssignmentId) {
    revokedCompanyContactRoleAssignmentId
    userErrors {
      field
      message
    }
  }
}
```
