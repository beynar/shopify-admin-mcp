# Object: `CompanyLocationStaffMemberAssignment`

A representation of store's staff member who is assigned to a [company location](https://shopify.dev/api/admin-graphql/latest/objects/CompanyLocation) of the shop. The staff member's actions will be limited to objects associated with the assigned company location.

**Implements:** `Node`

## Fields

- `companyLocation`: `CompanyLocation!` — The company location the staff member is assigned to.
- `id`: `ID!` — A globally-unique ID.
- `staffMember`: `StaffMember!` — Represents the data of a staff member who's assigned to a company location.

## Related Types

- [CompanyLocation](../../types/objects/CompanyLocation.md)
- [StaffMember](../../types/objects/StaffMember.md)
