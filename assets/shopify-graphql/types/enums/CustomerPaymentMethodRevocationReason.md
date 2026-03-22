# Enum: `CustomerPaymentMethodRevocationReason`

The revocation reason types for a customer payment method.

## Values

- `AUTHORIZE_NET_GATEWAY_NOT_ENABLED` — The Authorize.net payment gateway is not enabled.
- `AUTHORIZE_NET_RETURNED_NO_PAYMENT_METHOD` — Authorize.net did not return any payment methods. Make sure that the correct Authorize.net account is linked.
- `FAILED_TO_UPDATE_CREDIT_CARD` — The credit card failed to update.
- `STRIPE_API_AUTHENTICATION_ERROR` — Failed to contact the Stripe API.
- `STRIPE_API_INVALID_REQUEST_ERROR` — Invalid request. Failed to retrieve payment method from Stripe.
- `STRIPE_GATEWAY_NOT_ENABLED` — The Stripe payment gateway is not enabled.
- `STRIPE_RETURNED_NO_PAYMENT_METHOD` — Stripe did not return any payment methods. Make sure that the correct Stripe account is linked.
- `STRIPE_PAYMENT_METHOD_NOT_CARD` — The Stripe payment method type should be card.
- `BRAINTREE_API_AUTHENTICATION_ERROR` — Failed to contact Braintree API.
- `BRAINTREE_GATEWAY_NOT_ENABLED` — The Braintree payment gateway is not enabled.
- `BRAINTREE_RETURNED_NO_PAYMENT_METHOD` — Braintree returned no payment methods. Make sure the correct Braintree account is linked.
- `BRAINTREE_PAYMENT_METHOD_NOT_CARD` — The Braintree payment method type should be a credit card or Apple Pay card.
- `PAYMENT_METHOD_VERIFICATION_FAILED` — Verification of payment method failed.
- `THREE_D_SECURE_FLOW_IN_VERIFICATION_NOT_IMPLEMENTED` — Verification of the payment method failed due to 3DS not being supported.
- `MANUALLY_REVOKED` — The payment method was manually revoked.
- `FAILED_TO_RETRIEVE_BILLING_ADDRESS` — The billing address failed to retrieve.
- `MERGED` — The payment method was replaced with an existing payment method. The associated contracts have been migrated to the other payment method.
- `CUSTOMER_REDACTED` — The customer redacted their payment method.
- `TOO_MANY_CONSECUTIVE_FAILURES` — Too many consecutive failed attempts.
- `CVV_ATTEMPTS_LIMIT_EXCEEDED` — CVV attempts limit exceeded.
