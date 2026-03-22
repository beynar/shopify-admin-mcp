# Enum: `ShopifyPaymentsPayoutAlternateCurrencyCreateUserErrorCode`

Possible error codes that can be returned by `ShopifyPaymentsPayoutAlternateCurrencyCreateUserError`.

## Values

- `MISSING_PROVIDER_ACCOUNT` — No Stripe provider account was found.
- `ALTERNATE_CURRENCY_PAYOUT_FAILED_STRIPE_ERROR` — Failed to create payout due to an error from Stripe.
- `UNKNOWN_CORE_ERROR` — Failed to create payout due to an error from Shopify Core.
- `ALTERNATE_CURRENCY_PAYOUT_FAILED_NO_ELIGIBLE_BALANCE` — Failed to create payout, there is no eligible balance in this currency.
