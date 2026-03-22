# Mutation: `companyLocationAssignStaffMembers`

**Returns:** `CompanyLocationAssignStaffMembersPayload`

Creates one or more mappings between a staff member at a shop and a company location.

## Arguments

- **`companyLocationId`**: `ID!` — The ID of the company location to assign the staff member to.
- **`staffMemberIds`**: `[ID!]!` — The list of IDs of the staff members to assign.

## Payload Fields

- `companyLocationStaffMemberAssignments`: `[CompanyLocationStaffMemberAssignment!]` — The list of created staff member assignments.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocationAssignStaffMembersPayload](../types/objects/CompanyLocationAssignStaffMembersPayload.md)
- [CompanyLocationStaffMemberAssignment](../types/objects/CompanyLocationStaffMemberAssignment.md)

## Example Mutation

```graphql
mutation CompanyLocationAssignStaffMembers($companyLocationId: ID!, $staffMemberIds: [ID!]!) {
  companyLocationAssignStaffMembers(companyLocationId: $companyLocationId, staffMemberIds: $staffMemberIds) {
    companyLocationStaffMemberAssignments {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
