# Enum: `OrderTransactionErrorCode`

A standardized error code, independent of the payment provider.

## Values

- `INCORRECT_NUMBER` — The card number is incorrect.
- `INVALID_NUMBER` — The format of the card number is incorrect.
- `INVALID_EXPIRY_DATE` — The format of the expiry date is incorrect.
- `INVALID_CVC` — The format of the CVC is incorrect.
- `EXPIRED_CARD` — The card is expired.
- `INCORRECT_CVC` — The card security code (CVC/CVV) is incorrect.
- `INCORRECT_ZIP` — The ZIP or postal code doesn't match the one on file.
- `INCORRECT_ADDRESS` — The address is incorrect.
- `INCORRECT_PIN` — The PIN entered is incorrect.
- `CARD_DECLINED` — The card was declined.
- `PROCESSING_ERROR` — There was an error while processing the payment.
- `CALL_ISSUER` — The issuer declined the transaction, the customer should contact their issuer for more details.
- `PICK_UP_CARD` — The card has been reported as lost or stolen, and the card issuer has requested that the merchant keep the card and call the number on the back.
- `CONFIG_ERROR` — There is an error in the gateway or merchant configuration.
- `TEST_MODE_LIVE_CARD` — A real card was used but the gateway was in test mode.
- `UNSUPPORTED_FEATURE` — The gateway or merchant configuration doesn't support a feature, such as network tokenization.
- `GENERIC_ERROR` — There was an unknown error with processing the payment.
- `INVALID_COUNTRY` — The payment method is not available in the customer's country.
- `INVALID_AMOUNT` — The amount is invalid.
- `PAYMENT_METHOD_UNAVAILABLE` — The payment method is momentarily unavailable.
- `AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD` — The payment method was invalid.
- `AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED` — The maximum amount has been captured.
- `AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED` — The maximum amount has been refunded.
- `AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED` — The maximum of 10 authorizations has been captured for an order.
- `AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED` — The maximum of 10 refunds has been processed for an order.
- `AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED` — The order was canceled, which canceled all open authorizations.
- `AMAZON_PAYMENTS_STALE` — The order was not confirmed within three hours.
