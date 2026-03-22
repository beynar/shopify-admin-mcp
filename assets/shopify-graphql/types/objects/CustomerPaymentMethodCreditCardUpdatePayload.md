# Object: `CustomerPaymentMethodCreditCardUpdatePayload`

Return type for `customerPaymentMethodCreditCardUpdate` mutation.

## Fields

- `customerPaymentMethod`: `CustomerPaymentMethod` — The customer payment method.
- `processing`: `Boolean` — If the card verification result is processing. When this is true, customer_payment_method will be null.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerPaymentMethod](../../types/objects/CustomerPaymentMethod.md)
- [UserError](../../types/objects/UserError.md)
