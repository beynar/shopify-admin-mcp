# Object: `SuggestedOrderTransaction`

A suggested transaction. Suggested transaction are usually used in the context of refunds
and exchanges.

## Fields

- `accountNumber`: `String` — The masked account number associated with the payment method.
- `amount`: `Money!` *(deprecated)* — The amount of the transaction.
- `amountSet`: `MoneyBag!` — The amount and currency of the suggested order transaction in shop and presentment currencies.
- `formattedGateway`: `String` — The human-readable payment gateway name suggested to process the transaction.
- `gateway`: `String` — The suggested payment gateway used to process the transaction.
- `kind`: `SuggestedOrderTransactionKind!` — Specifies the kind of the suggested order transaction.
- `maximumRefundable`: `Money` *(deprecated)* — Specifies the available amount to refund on the gateway. Only available within SuggestedRefund.
- `maximumRefundableSet`: `MoneyBag` — Specifies the available amount to refund on the gateway in shop and presentment currencies. Only available within SuggestedRefund.
- `parentTransaction`: `OrderTransaction` — The associated parent transaction, for example the authorization of a capture.
- `paymentDetails`: `PaymentDetails` — The associated payment details related to the transaction.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [OrderTransaction](../../types/objects/OrderTransaction.md)
- [PaymentDetails](../../types/unions/PaymentDetails.md)
- [SuggestedOrderTransactionKind](../../types/enums/SuggestedOrderTransactionKind.md)
