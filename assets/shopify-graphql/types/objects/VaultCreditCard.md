# Object: `VaultCreditCard`

Represents a credit card payment instrument.

## Fields

- `billingAddress`: `CustomerCreditCardBillingAddress` — The billing address of the card.
- `brand`: `String!` — The brand for the card.
- `expired`: `Boolean!` — Whether the card has been expired.
- `expiryMonth`: `Int!` — The expiry month of the card.
- `expiryYear`: `Int!` — The expiry year of the card.
- `lastDigits`: `String!` — The last four digits for the card.
- `name`: `String!` — The name of the card holder.

## Related Types

- [CustomerCreditCardBillingAddress](../../types/objects/CustomerCreditCardBillingAddress.md)
