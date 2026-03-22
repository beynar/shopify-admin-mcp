# Mutation: `companyLocationTaxSettingsUpdate`

**Returns:** `CompanyLocationTaxSettingsUpdatePayload`

Sets the tax settings for a company location.

## Arguments

- **`companyLocationId`**: `ID!` — The ID of the company location that the tax settings get assigned to.
- **`taxRegistrationId`**: `String` — The unique tax registration ID for the company location.
- **`taxExempt`**: `Boolean` — Whether the location is exempt from taxes.
- **`exemptionsToAssign`**: `[TaxExemption!]` — The list of tax exemptions to assign to the company location.
- **`exemptionsToRemove`**: `[TaxExemption!]` — The list of tax exemptions to remove from the company location.

## Payload Fields

- `companyLocation`: `CompanyLocation` — The company location with the updated tax settings.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocation](../types/objects/CompanyLocation.md)
- [CompanyLocationTaxSettingsUpdatePayload](../types/objects/CompanyLocationTaxSettingsUpdatePayload.md)
- [TaxExemption](../types/enums/TaxExemption.md)

## Example Mutation

```graphql
mutation CompanyLocationTaxSettingsUpdate($companyLocationId: ID!, $taxRegistrationId: String, $taxExempt: Boolean, $exemptionsToAssign: [TaxExemption!], $exemptionsToRemove: [TaxExemption!]) {
  companyLocationTaxSettingsUpdate(companyLocationId: $companyLocationId, taxRegistrationId: $taxRegistrationId, taxExempt: $taxExempt, exemptionsToAssign: $exemptionsToAssign, exemptionsToRemove: $exemptionsToRemove) {
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
