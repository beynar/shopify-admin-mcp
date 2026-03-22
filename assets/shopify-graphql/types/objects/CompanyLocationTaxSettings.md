# Object: `CompanyLocationTaxSettings`

Represents the tax settings for a company location.

## Fields

- `taxExempt`: `Boolean!` — Whether the location is exempt from taxes.
- `taxExemptions`: `[TaxExemption!]!` — The list of tax exemptions applied to the location.
- `taxRegistrationId`: `String` — The tax registration ID for the company location.

## Related Types

- [TaxExemption](../../types/enums/TaxExemption.md)
