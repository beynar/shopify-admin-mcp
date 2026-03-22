# Query: `companyContactRole`

**Returns:** `CompanyContactRole`

Returns a `CompanyContactRole` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `CompanyContactRole` to return.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of a role.
- `note`: `String` — A note for the role.

## Related Types

- [CompanyContactRole](../types/objects/CompanyContactRole.md)

## Example Query

```graphql
query CompanyContactRole($id: ID!) {
  companyContactRole(id: $id) {
    name
    note
  }
}
```
