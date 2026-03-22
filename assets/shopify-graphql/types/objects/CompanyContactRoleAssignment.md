# Object: `CompanyContactRoleAssignment`

The CompanyContactRoleAssignment describes the company and location associated to a company contact's role.

**Implements:** `Node`

## Fields

- `company`: `Company!` — The company this role assignment belongs to.
- `companyContact`: `CompanyContact!` — The company contact for whom this role is assigned.
- `companyLocation`: `CompanyLocation!` — The company location to which the role is assigned.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was created.
- `id`: `ID!` — A globally-unique ID.
- `role`: `CompanyContactRole!` — The role that's assigned to the company contact.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was last updated.

## Related Types

- [Company](../../types/objects/Company.md)
- [CompanyContact](../../types/objects/CompanyContact.md)
- [CompanyContactRole](../../types/objects/CompanyContactRole.md)
- [CompanyLocation](../../types/objects/CompanyLocation.md)
