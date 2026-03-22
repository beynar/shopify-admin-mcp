# Input Object: `CustomerEmailMarketingConsentInput`

Information that describes when a customer consented to
        receiving marketing material by email.

## Input Fields

- `marketingOptInLevel`: `CustomerMarketingOptInLevel` — The customer opt-in level at the time of subscribing to marketing material.
- `marketingState`: `CustomerEmailMarketingState!` — The marketing state to set. Accepted values: SUBSCRIBED, UNSUBSCRIBED, and PENDING. NOT_SUBSCRIBED, REDACTED, and INVALID are rejected if sent as input.
- `consentUpdatedAt`: `DateTime` — The latest date and time when the customer consented or objected to
- `sourceLocationId`: `ID` — Identifies the location where the customer consented to receiving marketing material by email.

## Related Types

- [CustomerEmailMarketingState](../../types/enums/CustomerEmailMarketingState.md)
- [CustomerMarketingOptInLevel](../../types/enums/CustomerMarketingOptInLevel.md)
