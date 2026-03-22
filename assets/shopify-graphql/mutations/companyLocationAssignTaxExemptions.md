# Mutation: `companyLocationAssignTaxExemptions`

**Returns:** `CompanyLocationAssignTaxExemptionsPayload`

Assigns tax exemptions to the company location.

## Arguments

- **`companyLocationId`**: `ID!` — The location to which the tax exemptions will be assigned.
- **`taxExemptions`**: `[TaxExemption!]!` — The tax exemptions that are being assigned to the location.

## Payload Fields

- `companyLocation`: `CompanyLocation` — The updated company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocation](../types/objects/CompanyLocation.md)
- [CompanyLocationAssignTaxExemptionsPayload](../types/objects/CompanyLocationAssignTaxExemptionsPayload.md)
- [TaxExemption](../types/enums/TaxExemption.md)

## Example Mutation

```graphql
mutation CompanyLocationAssignTaxExemptions($companyLocationId: ID!, $taxExemptions: [TaxExemption!]!) {
  companyLocationAssignTaxExemptions(companyLocationId: $companyLocationId, taxExemptions: $taxExemptions) {
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
