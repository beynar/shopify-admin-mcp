# Enum: `CustomerEmailMarketingState`

The possible email marketing states for a customer.

## Values

- `NOT_SUBSCRIBED` — Default state for customers who have never subscribed to email marketing.
- `PENDING` — The customer is in the process of subscribing to email marketing.
- `SUBSCRIBED` — The customer is subscribed to email marketing.
- `UNSUBSCRIBED` — The customer isn't currently subscribed to email marketing but was previously subscribed.
- `REDACTED` — The customer's personal data is erased. This value is internally-set and read-only.
- `INVALID` — This value is internally-set and read-only.
