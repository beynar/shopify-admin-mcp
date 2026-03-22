# Input Object: `CustomerSmsMarketingConsentUpdateInput`

The input fields for updating SMS marketing consent information for a given customer ID.

## Input Fields

- `customerId`: `ID!` — The ID of the customer to update the SMS marketing consent information for. The customer must have a unique phone number associated to the record. If not, add the phone number using the `customerUpdate` mutation first.
- `smsMarketingConsent`: `CustomerSmsMarketingConsentInput!` — The marketing consent information when the customer consented to receiving marketing material by SMS.

## Related Types

- [CustomerSmsMarketingConsentInput](../../types/inputs/CustomerSmsMarketingConsentInput.md)
