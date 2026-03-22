# Mutation: `companyLocationAssignRoles`

**Returns:** `CompanyLocationAssignRolesPayload`

Assigns roles on a company location.

## Arguments

- **`companyLocationId`**: `ID!` — The location whose roles are being assigned.
- **`rolesToAssign`**: `[CompanyLocationRoleAssign!]!` — The roles to assign.

## Payload Fields

- `roleAssignments`: `[CompanyContactRoleAssignment!]` — A list of newly created assignments of company contacts to a company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContactRoleAssignment](../types/objects/CompanyContactRoleAssignment.md)
- [CompanyLocationAssignRolesPayload](../types/objects/CompanyLocationAssignRolesPayload.md)
- [CompanyLocationRoleAssign](../types/inputs/CompanyLocationRoleAssign.md)

## Example Mutation

```graphql
mutation CompanyLocationAssignRoles($companyLocationId: ID!, $rolesToAssign: [CompanyLocationRoleAssign!]!) {
  companyLocationAssignRoles(companyLocationId: $companyLocationId, rolesToAssign: $rolesToAssign) {
    roleAssignments {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
