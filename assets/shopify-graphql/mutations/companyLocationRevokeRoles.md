# Mutation: `companyLocationRevokeRoles`

**Returns:** `CompanyLocationRevokeRolesPayload`

Revokes roles on a company location.

## Arguments

- **`companyLocationId`**: `ID!` — The location whose roles are being revoked.
- **`rolesToRevoke`**: `[ID!]!` — The current roles to revoke.

## Payload Fields

- `revokedRoleAssignmentIds`: `[ID!]` — A list of role assignment IDs that were removed from the company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocationRevokeRolesPayload](../types/objects/CompanyLocationRevokeRolesPayload.md)

## Example Mutation

```graphql
mutation CompanyLocationRevokeRoles($companyLocationId: ID!, $rolesToRevoke: [ID!]!) {
  companyLocationRevokeRoles(companyLocationId: $companyLocationId, rolesToRevoke: $rolesToRevoke) {
    revokedRoleAssignmentIds
    userErrors {
      field
      message
    }
  }
}
```
