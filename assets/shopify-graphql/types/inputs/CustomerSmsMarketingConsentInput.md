# Input Object: `CustomerSmsMarketingConsentInput`

The marketing consent information when the customer consented to
        receiving marketing material by SMS.

## Input Fields

- `marketingOptInLevel`: `CustomerMarketingOptInLevel` — The marketing subscription opt-in level that was set when the customer consented to receive marketing information.
- `marketingState`: `CustomerSmsMarketingState!` — The current SMS marketing state for the customer.
- `consentUpdatedAt`: `DateTime` — The date and time when the customer consented to receive marketing material by SMS.
- `sourceLocationId`: `ID` — Identifies the location where the customer consented to receiving marketing material by SMS.

## Related Types

- [CustomerMarketingOptInLevel](../../types/enums/CustomerMarketingOptInLevel.md)
- [CustomerSmsMarketingState](../../types/enums/CustomerSmsMarketingState.md)
