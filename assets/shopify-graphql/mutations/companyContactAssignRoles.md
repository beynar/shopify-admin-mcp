# Mutation: `companyContactAssignRoles`

**Returns:** `CompanyContactAssignRolesPayload`

Assigns roles on a company contact.

## Arguments

- **`companyContactId`**: `ID!` — The contact whose roles are being assigned.
- **`rolesToAssign`**: `[CompanyContactRoleAssign!]!` — The new roles to assign.

## Payload Fields

- `roleAssignments`: `[CompanyContactRoleAssignment!]` — A list of newly created assignments of company contacts to a company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContactAssignRolesPayload](../types/objects/CompanyContactAssignRolesPayload.md)
- [CompanyContactRoleAssign](../types/inputs/CompanyContactRoleAssign.md)
- [CompanyContactRoleAssignment](../types/objects/CompanyContactRoleAssignment.md)

## Example Mutation

```graphql
mutation CompanyContactAssignRoles($companyContactId: ID!, $rolesToAssign: [CompanyContactRoleAssign!]!) {
  companyContactAssignRoles(companyContactId: $companyContactId, rolesToAssign: $rolesToAssign) {
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
