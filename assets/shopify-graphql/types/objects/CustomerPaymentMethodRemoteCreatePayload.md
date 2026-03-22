# Object: `CustomerPaymentMethodRemoteCreatePayload`

Return type for `customerPaymentMethodRemoteCreate` mutation.

## Fields

- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method. Note that the returned payment method may initially be in an incomplete state. Developers should poll this payment method using the customerPaymentMethod query until all required payment details have been processed.
- `userErrors`: `[CustomerPaymentMethodRemoteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethod](../../types/objects/CustomerPaymentMethod.md)
- [CustomerPaymentMethodRemoteUserError](../../types/objects/CustomerPaymentMethodRemoteUserError.md)
