# Enum: `ShopPayPaymentRequestReceiptProcessingStatusErrorCode`

A standardized error code, independent of the payment provider.

## Values

- `INCORRECT_NUMBER` — The card number is incorrect.
- `INVALID_NUMBER` — The format of the card number is incorrect.
- `INVALID_EXPIRY_DATE` — The format of the expiry date is incorrect.
- `INVALID_CVC` — The format of the CVC is incorrect.
- `EXPIRED_CARD` — The card is expired.
- `INCORRECT_CVC` — The CVC does not match the card number.
- `INCORRECT_ZIP` — The ZIP or postal code does not match the card number.
- `INCORRECT_ADDRESS` — The address does not match the card number.
- `INCORRECT_PIN` — The entered PIN is incorrect.
- `AMOUNT_TOO_SMALL` — The amount is too small.
- `CARD_DECLINED` — The card was declined.
- `PROCESSING_ERROR` — There was an error while processing the payment.
- `CALL_ISSUER` — Call the card issuer.
- `THREE_D_SECURE_FAILED` — The 3D Secure check failed.
- `FRAUD_SUSPECTED` — The card issuer has flagged the transaction as potentially fraudulent.
- `PICK_UP_CARD` — The card has been reported as lost or stolen, and the card issuer has requested that the merchant keep the card and call the number on the back.
- `CONFIG_ERROR` — There is an error in the gateway or merchant configuration.
- `TEST_MODE_LIVE_CARD` — A real card was used but the gateway was in test mode.
- `UNSUPPORTED_FEATURE` — The gateway or merchant configuration doesn't support a feature, such as network tokenization.
- `GENERIC_ERROR` — There was an unknown error with processing the payment.
- `INVALID_COUNTRY` — The payment method is not available in the customer's country.
- `INVALID_AMOUNT` — The amount is either too high or too low for the provider.
- `PAYMENT_METHOD_UNAVAILABLE` — The payment method is momentarily unavailable.
