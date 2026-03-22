# Object: `CardPaymentDetails`

Credit card payment information captured during a transaction. Includes cardholder details, card metadata, verification response codes, and the [`DigitalWallet`](https://shopify.dev/docs/api/admin-graphql/latest/enums/DigitalWallet#valid-values) when used.

**Implements:** `BasePaymentDetails`

## Fields

- `avsResultCode`: `String` — The response code from the address verification system (AVS). The code is always a single letter.
- `bin`: `String` — The issuer identification number (IIN), formerly known as bank identification number (BIN) of the customer's credit card. This is made up of the first few digits of the credit card number.
- `company`: `String` — The name of the company that issued the customer's credit card.
- `cvvResultCode`: `String` — The response code from the credit card company indicating whether the customer entered the card security code, or card verification value, correctly. The code is a single letter or empty string.
- `expirationMonth`: `Int` — The month in which the used credit card expires.
- `expirationYear`: `Int` — The year in which the used credit card expires.
- `name`: `String` — The holder of the credit card.
- `number`: `String` — The customer's credit card number, with most of the leading digits redacted.
- `paymentMethodName`: `String` — The name of payment method used by the buyer.
- `wallet`: `DigitalWallet` — Digital wallet used for the payment.

## Related Types

- [DigitalWallet](../../types/enums/DigitalWallet.md)
