# Mutation: `companyLocationRemoveStaffMembers`

**Returns:** `CompanyLocationRemoveStaffMembersPayload`

Deletes one or more existing mappings between a staff member at a shop and a company location.

## Arguments

- **`companyLocationStaffMemberAssignmentIds`**: `[ID!]!` — The list of IDs of the company location staff member assignment to delete.

## Payload Fields

- `deletedCompanyLocationStaffMemberAssignmentIds`: `[ID!]` — The list of IDs of the deleted staff member assignment.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocationRemoveStaffMembersPayload](../types/objects/CompanyLocationRemoveStaffMembersPayload.md)

## Example Mutation

```graphql
mutation CompanyLocationRemoveStaffMembers($companyLocationStaffMemberAssignmentIds: [ID!]!) {
  companyLocationRemoveStaffMembers(companyLocationStaffMemberAssignmentIds: $companyLocationStaffMemberAssignmentIds) {
    deletedCompanyLocationStaffMemberAssignmentIds
    userErrors {
      field
      message
    }
  }
}
```
