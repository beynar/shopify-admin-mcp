# Object: `ShopPayPaymentRequestReceipt`

The receipt of Shop Pay payment request session submission.

## Fields

- `createdAt`: `DateTime!` — The date and time when the payment request receipt was created.
- `order`: `Order` — The order that's associated with the payment request receipt.
- `paymentRequest`: `ShopPayPaymentRequest!` — The shop pay payment request object.
- `processingStatus`: `ShopPayPaymentRequestReceiptProcessingStatus!` — The status of the payment request session submission.
- `sourceIdentifier`: `String!` — The source identifier provided in the `ShopPayPaymentRequestSessionCreate` mutation.
- `token`: `String!` — The token of the receipt, initially returned by an `ShopPayPaymentRequestSessionSubmit` mutation.

## Related Types

- [Order](../../types/objects/Order.md)
- [ShopPayPaymentRequest](../../types/objects/ShopPayPaymentRequest.md)
- [ShopPayPaymentRequestReceiptProcessingStatus](../../types/objects/ShopPayPaymentRequestReceiptProcessingStatus.md)
