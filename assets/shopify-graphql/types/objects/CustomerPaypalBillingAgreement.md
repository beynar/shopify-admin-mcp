# Object: `CustomerPaypalBillingAgreement`

Represents a PayPal instrument for customer payment method.

## Fields

- `billingAddress`: `CustomerPaymentInstrumentBillingAddress` — The billing address of this payment method.
- `inactive`: `Boolean!` — Whether the PayPal billing agreement is inactive.
- `isRevocable`: `Boolean!` — Whether the payment method can be revoked.The payment method can be revoked if there are no active subscription contracts.
- `paypalAccountEmail`: `String` — The customers's PayPal account email address.

## Related Types

- [CustomerPaymentInstrumentBillingAddress](../../types/objects/CustomerPaymentInstrumentBillingAddress.md)
