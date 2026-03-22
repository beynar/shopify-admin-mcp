# Mutation: `companyLocationRevokeTaxExemptions`

**Returns:** `CompanyLocationRevokeTaxExemptionsPayload`

Revokes tax exemptions from the company location.

## Arguments

- **`companyLocationId`**: `ID!` — The location from which the tax exemptions will be revoked.
- **`taxExemptions`**: `[TaxExemption!]!` — The tax exemptions that are being revoked from the location.

## Payload Fields

- `companyLocation`: `CompanyLocation` — The updated company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocation](../types/objects/CompanyLocation.md)
- [CompanyLocationRevokeTaxExemptionsPayload](../types/objects/CompanyLocationRevokeTaxExemptionsPayload.md)
- [TaxExemption](../types/enums/TaxExemption.md)

## Example Mutation

```graphql
mutation CompanyLocationRevokeTaxExemptions($companyLocationId: ID!, $taxExemptions: [TaxExemption!]!) {
  companyLocationRevokeTaxExemptions(companyLocationId: $companyLocationId, taxExemptions: $taxExemptions) {
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
