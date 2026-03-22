# Object: `CustomerSmsMarketingConsentState`

The record of when a customer consented to receive marketing material by SMS.

The customer's consent state reflects the record with the most recent date when consent was updated.

## Fields

- `consentCollectedFrom`: `CustomerConsentCollectedFrom` — The source from which the SMS marketing information for the customer was collected.
- `consentUpdatedAt`: `DateTime` — The date and time when the customer consented to receive marketing material by SMS.
- `marketingOptInLevel`: `CustomerMarketingOptInLevel!` — The marketing subscription opt-in level that was set when the customer consented to receive marketing information.
- `marketingState`: `CustomerSmsMarketingState!` — The current SMS marketing state for the customer.
- `sourceLocation`: `Location` — The location where the customer consented to receive marketing material by SMS.

## Related Types

- [CustomerConsentCollectedFrom](../../types/enums/CustomerConsentCollectedFrom.md)
- [CustomerMarketingOptInLevel](../../types/enums/CustomerMarketingOptInLevel.md)
- [CustomerSmsMarketingState](../../types/enums/CustomerSmsMarketingState.md)
- [Location](../../types/objects/Location.md)
