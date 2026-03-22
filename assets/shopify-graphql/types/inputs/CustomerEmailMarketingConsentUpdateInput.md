# Input Object: `CustomerEmailMarketingConsentUpdateInput`

The input fields for the email consent information to update for a given customer ID.

## Input Fields

- `customerId`: `ID!` — The ID of the customer for which to update the email marketing consent information. The customer must have a unique email address associated to the record. If not, add the email address using the `customerUpdate` mutation first.
- `emailMarketingConsent`: `CustomerEmailMarketingConsentInput!` — The marketing consent information when the customer consented to receiving marketing material by email.

## Related Types

- [CustomerEmailMarketingConsentInput](../../types/inputs/CustomerEmailMarketingConsentInput.md)
