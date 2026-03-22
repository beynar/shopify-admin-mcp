# Mutation: `companyContactRevokeRoles`

**Returns:** `CompanyContactRevokeRolesPayload`

Revokes roles on a company contact.

## Arguments

- **`companyContactId`**: `ID!` — The contact whose roles are being revoked.
- **`roleAssignmentIds`**: `[ID!]` — The current role assignment IDs to revoke.
- **`revokeAll`**: `Boolean` = `false` — Flag to revoke all roles on the contact.

## Payload Fields

- `revokedRoleAssignmentIds`: `[ID!]` — A list of role assignment IDs that were removed from the company contact.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContactRevokeRolesPayload](../types/objects/CompanyContactRevokeRolesPayload.md)

## Example Mutation

```graphql
mutation CompanyContactRevokeRoles($companyContactId: ID!, $roleAssignmentIds: [ID!], $revokeAll: Boolean) {
  companyContactRevokeRoles(companyContactId: $companyContactId, roleAssignmentIds: $roleAssignmentIds, revokeAll: $revokeAll) {
    revokedRoleAssignmentIds
    userErrors {
      field
      message
    }
  }
}
```
