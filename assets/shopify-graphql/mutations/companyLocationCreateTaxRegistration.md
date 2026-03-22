# Mutation: `companyLocationCreateTaxRegistration`

**Returns:** `CompanyLocationCreateTaxRegistrationPayload`

Creates a tax registration for a company location.

## Arguments

- **`locationId`**: `ID!` — The ID of the company location that the tax registration gets assigned to.
- **`taxId`**: `String!` — The unique tax id for the tax registration.

## Payload Fields

- `companyLocation`: `CompanyLocation` — The company location with the created tax registration.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocation](../types/objects/CompanyLocation.md)
- [CompanyLocationCreateTaxRegistrationPayload](../types/objects/CompanyLocationCreateTaxRegistrationPayload.md)

## Example Mutation

```graphql
mutation CompanyLocationCreateTaxRegistration($locationId: ID!, $taxId: String!) {
  companyLocationCreateTaxRegistration(locationId: $locationId, taxId: $taxId) {
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
