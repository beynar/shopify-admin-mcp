# Input Object: `CustomerPaymentMethodRemoteInput`

The input fields for a remote gateway payment method, only one remote reference permitted.

## Input Fields

- `stripePaymentMethod`: `RemoteStripePaymentMethodInput` — Input containing the fields for a remote stripe credit card.
- `authorizeNetCustomerPaymentProfile`: `RemoteAuthorizeNetCustomerPaymentProfileInput` — The input fields for a remote authorize net customer profile.
- `braintreePaymentMethod`: `RemoteBraintreePaymentMethodInput` — The input fields for a remote Braintree customer profile.

## Related Types

- [RemoteAuthorizeNetCustomerPaymentProfileInput](../../types/inputs/RemoteAuthorizeNetCustomerPaymentProfileInput.md)
- [RemoteBraintreePaymentMethodInput](../../types/inputs/RemoteBraintreePaymentMethodInput.md)
- [RemoteStripePaymentMethodInput](../../types/inputs/RemoteStripePaymentMethodInput.md)
