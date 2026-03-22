# Object: `CustomerEmailMarketingConsentState`

The record of when a customer consented to receive marketing material by email.

## Fields

- `consentUpdatedAt`: `DateTime` — The date and time at which the customer consented to receive marketing material by email.
- `marketingOptInLevel`: `CustomerMarketingOptInLevel` — The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
- `marketingState`: `CustomerEmailMarketingState!` — The current email marketing state for the customer.
- `sourceLocation`: `Location` — The location where the customer consented to receive marketing material by email.

## Related Types

- [CustomerEmailMarketingState](../../types/enums/CustomerEmailMarketingState.md)
- [CustomerMarketingOptInLevel](../../types/enums/CustomerMarketingOptInLevel.md)
- [Location](../../types/objects/Location.md)
