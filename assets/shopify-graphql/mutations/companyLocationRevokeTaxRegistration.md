# Mutation: `companyLocationRevokeTaxRegistration`

**Returns:** `CompanyLocationRevokeTaxRegistrationPayload`

Revokes tax registration on a company location.

## Arguments

- **`companyLocationId`**: `ID!` — The location whose tax registration is being revoked.

## Payload Fields

- `companyLocation`: `CompanyLocation` — The updated company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocation](../types/objects/CompanyLocation.md)
- [CompanyLocationRevokeTaxRegistrationPayload](../types/objects/CompanyLocationRevokeTaxRegistrationPayload.md)

## Example Mutation

```graphql
mutation CompanyLocationRevokeTaxRegistration($companyLocationId: ID!) {
  companyLocationRevokeTaxRegistration(companyLocationId: $companyLocationId) {
    companyLocation {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
