# Object: `CustomerPaymentMethod`

A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.

The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.

**Implements:** `Node`

## Fields

- `customer`: `Customer` — The customer to whom the payment method belongs.
- `id`: `ID!` — The ID of this payment method.
- `instrument`: `CustomerPaymentInstrument` — The instrument for this payment method.
- `mandates` `(first, after, last, before, reverse)`: `PaymentMandateResourceConnection!` — The mandates associated with the payment method.
- `revokedAt`: `DateTime` — The time that the payment method was revoked.
- `revokedReason`: `CustomerPaymentMethodRevocationReason` — The revocation reason for this payment method.
- `subscriptionContracts` `(first, after, last, before, reverse)`: `SubscriptionContractConnection!` — List Subscription Contracts.

## Related Types

- [Customer](../../types/objects/Customer.md)
- [CustomerPaymentInstrument](../../types/unions/CustomerPaymentInstrument.md)
- [CustomerPaymentMethodRevocationReason](../../types/enums/CustomerPaymentMethodRevocationReason.md)
