# Input Object: `OrderCreateOrderTransactionInput`

The input fields for a transaction to create for an order.

## Input Fields

- `amountSet`: `MoneyBagInput!` — The amount of the transaction.
- `authorizationCode`: `String` — The authorization code associated with the transaction.
- `deviceId`: `ID` — The ID of the device used to process the transaction.
- `gateway`: `String` — The name of the gateway the transaction was issued through.
- `giftCardId`: `ID` — The ID of the gift card used for this transaction.
- `kind`: `OrderTransactionKind` = `SALE` — The kind of transaction.
- `locationId`: `ID` — The ID of the location where the transaction was processed.
- `processedAt`: `DateTime` — The date and time when the transaction was processed.
- `receiptJson`: `JSON` — The transaction receipt that the payment gateway attaches to the transaction.
- `status`: `OrderTransactionStatus` = `SUCCESS` — The status of the transaction.
- `test`: `Boolean` = `false` — Whether the transaction is a test transaction.
- `userId`: `ID` — The ID of the user who processed the transaction.

## Related Types

- [MoneyBagInput](../../types/inputs/MoneyBagInput.md)
- [OrderTransactionKind](../../types/enums/OrderTransactionKind.md)
- [OrderTransactionStatus](../../types/enums/OrderTransactionStatus.md)
