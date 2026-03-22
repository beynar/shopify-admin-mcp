# Object: `CustomerCreditCard`

Represents a card instrument for customer payment method.

## Fields

- `billingAddress`: `CustomerCreditCardBillingAddress` — The billing address of the card.
- `brand`: `String!` — The brand of the card.
- `expiresSoon`: `Boolean!` — Whether the card is about to expire.
- `expiryMonth`: `Int!` — The expiry month of the card.
- `expiryYear`: `Int!` — The expiry year of the card.
- `firstDigits`: `String` — The card's BIN number.
- `isRevocable`: `Boolean!` — The payment method can be revoked if there are no active subscription contracts.
- `lastDigits`: `String!` — The last 4 digits of the card.
- `maskedNumber`: `String!` — The masked card number with only the last 4 digits displayed.
- `name`: `String!` — The name of the card holder.
- `source`: `String` — The source of the card if coming from a wallet such as Apple Pay.
- `virtualLastDigits`: `String` — The last 4 digits of the Device Account Number.

## Related Types

- [CustomerCreditCardBillingAddress](../../types/objects/CustomerCreditCardBillingAddress.md)
