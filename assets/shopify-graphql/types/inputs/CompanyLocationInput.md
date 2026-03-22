# Input Object: `CompanyLocationInput`

The input fields for company location when creating or updating a company location.

## Input Fields

- `name`: `String` — The name of the company location.
- `phone`: `String` — The phone number of the company location.
- `locale`: `String` — The preferred locale of the company location.
- `externalId`: `String` — A unique externally-supplied ID for the company location.
- `note`: `String` — A note about the company location.
- `buyerExperienceConfiguration`: `BuyerExperienceConfigurationInput` — The configuration for the buyer's checkout at the company location.
- `billingAddress`: `CompanyAddressInput` — The input fields to create or update the billing address for a company location.
- `shippingAddress`: `CompanyAddressInput` — The input fields to create or update the shipping address for a company location.
- `billingSameAsShipping`: `Boolean` — Whether the billing address is the same as the shipping address. If the value is true, then the input for `billingAddress` is ignored.
- `taxRegistrationId`: `String` — The tax registration ID of the company location.
- `taxExemptions`: `[TaxExemption!]` — The list of tax exemptions to apply to the company location.
- `taxExempt`: `Boolean` — Whether the location is exempt from taxes.

## Related Types

- [BuyerExperienceConfigurationInput](../../types/inputs/BuyerExperienceConfigurationInput.md)
- [CompanyAddressInput](../../types/inputs/CompanyAddressInput.md)
- [TaxExemption](../../types/enums/TaxExemption.md)
