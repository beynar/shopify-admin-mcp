# Enum: `SubscriptionBillingAttemptErrorCode`

The possible error codes associated with making billing attempts. The error codes supplement the
`error_message` to provide consistent results and help with dunning management.

## Values

- `PAYMENT_METHOD_NOT_FOUND` — Payment method was not found.
- `PAYMENT_PROVIDER_IS_NOT_ENABLED` — Payment provider is not enabled.
- `INVALID_PAYMENT_METHOD` — Payment method is invalid. Please update or create a new payment method.
- `UNEXPECTED_ERROR` — There was an unexpected error during the billing attempt.
- `EXPIRED_PAYMENT_METHOD` — Payment method is expired.
- `PAYMENT_METHOD_DECLINED` — Payment method was declined by processor.
- `AUTHENTICATION_ERROR` — There was an error during the payment authentication.
- `TEST_MODE` — Gateway is in test mode and attempted to bill a live payment method.
- `BUYER_CANCELED_PAYMENT_METHOD` — Payment method was canceled by buyer.
- `CUSTOMER_NOT_FOUND` — Customer was not found.
- `CUSTOMER_INVALID` — Customer is invalid.
- `INVALID_SHIPPING_ADDRESS` — The shipping address is either missing or invalid.
- `INVALID_CUSTOMER_BILLING_AGREEMENT` — The billing agreement ID or the transaction ID for the customer's payment method is invalid.
- `INVOICE_ALREADY_PAID` — A payment has already been made for this invoice.
- `PAYMENT_METHOD_INCOMPATIBLE_WITH_GATEWAY_CONFIG` — Payment method cannot be used with the current payment gateway test mode configuration.
- `AMOUNT_TOO_SMALL` — The amount is too small.
- `INVENTORY_ALLOCATIONS_NOT_FOUND` — No inventory location found or enabled.
- `INSUFFICIENT_INVENTORY` — Not enough inventory found.
- `TRANSIENT_ERROR` — Transient error, try again later.
- `INSUFFICIENT_FUNDS` — Insufficient funds.
- `PURCHASE_TYPE_NOT_SUPPORTED` — Purchase Type is not supported.
- `PAYPAL_ERROR_GENERAL` — Paypal Error General.
- `CARD_NUMBER_INCORRECT` — Card number was incorrect.
- `FRAUD_SUSPECTED` — Fraud was suspected.
- `NON_TEST_ORDER_LIMIT_REACHED` — Non-test order limit reached. Use a test payment gateway to place another order.
- `FREE_GIFT_CARD_NOT_ALLOWED` — Gift cards must have a price greater than zero.
- `INVALID_BILLING_ADDRESS` — The billing address is invalid.
