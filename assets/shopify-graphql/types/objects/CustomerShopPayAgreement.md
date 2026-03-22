# Object: `CustomerShopPayAgreement`

Represents a Shop Pay card instrument for customer payment method.

## Fields

- `billingAddress`: `CustomerCreditCardBillingAddress` — The billing address of the card.
- `expiresSoon`: `Boolean!` — Whether the card is about to expire.
- `expiryMonth`: `Int!` — The expiry month of the card.
- `expiryYear`: `Int!` — The expiry year of the card.
- `inactive`: `Boolean!` — Whether the Shop Pay billing agreement is inactive.
- `isRevocable`: `Boolean!` — The payment method can be revoked if there are no active subscription contracts.
- `lastDigits`: `String!` — The last 4 digits of the card.
- `maskedNumber`: `String!` — The masked card number with only the last 4 digits displayed.
- `name`: `String!` — The name of the card holder.

## Related Types

- [CustomerCreditCardBillingAddress](../../types/objects/CustomerCreditCardBillingAddress.md)
