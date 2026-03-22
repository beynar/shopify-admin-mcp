# Object: `ShopPayPaymentRequestReceiptProcessingStatus`

The processing status of a Shop Pay payment request.
Represents the different states a payment request can be in during its lifecycle,
from initial creation through to completion or failure.

## Fields

- `errorCode`: `ShopPayPaymentRequestReceiptProcessingStatusErrorCode` — A standardized error code, independent of the payment provider.
- `message`: `String` — The message of the payment request receipt.
- `state`: `ShopPayPaymentRequestReceiptProcessingStatusState!` — The state of the payment request receipt.

## Related Types

- [ShopPayPaymentRequestReceiptProcessingStatusErrorCode](../../types/enums/ShopPayPaymentRequestReceiptProcessingStatusErrorCode.md)
- [ShopPayPaymentRequestReceiptProcessingStatusState](../../types/enums/ShopPayPaymentRequestReceiptProcessingStatusState.md)
