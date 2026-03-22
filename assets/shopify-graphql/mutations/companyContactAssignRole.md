# Mutation: `companyContactAssignRole`

**Returns:** `CompanyContactAssignRolePayload`

Assigns a role to a contact for a location.

## Arguments

- **`companyContactId`**: `ID!` — The ID of the contact to assign a role to.
- **`companyContactRoleId`**: `ID!` — The ID of the role to assign to a contact.
- **`companyLocationId`**: `ID!` — The ID of the location to assign a role to a contact.

## Payload Fields

- `companyContactRoleAssignment`: `CompanyContactRoleAssignment` — The company contact role assignment.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContactAssignRolePayload](../types/objects/CompanyContactAssignRolePayload.md)
- [CompanyContactRoleAssignment](../types/objects/CompanyContactRoleAssignment.md)

## Example Mutation

```graphql
mutation CompanyContactAssignRole($companyContactId: ID!, $companyContactRoleId: ID!, $companyLocationId: ID!) {
  companyContactAssignRole(companyContactId: $companyContactId, companyContactRoleId: $companyContactRoleId, companyLocationId: $companyLocationId) {
    companyContactRoleAssignment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
