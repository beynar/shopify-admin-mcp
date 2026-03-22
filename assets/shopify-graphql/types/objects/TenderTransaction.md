# Object: `TenderTransaction`

A TenderTransaction represents a transaction with financial impact on a shop's balance sheet. A tender transaction always
represents actual money movement between a buyer and a shop. TenderTransactions can be used instead of OrderTransactions
for reconciling a shop's cash flow. A TenderTransaction is immutable once created.

**Implements:** `Node`

## Fields

- `amount`: `MoneyV2!` — The amount and currency of the tender transaction.
- `id`: `ID!` — A globally-unique ID.
- `order`: `Order` — The order that's related to the tender transaction. This value is null if the order has been deleted.
- `paymentMethod`: `String` — Information about the payment method used for the transaction.
- `processedAt`: `DateTime` — Date and time when the transaction was processed.
- `remoteReference`: `String` — The remote gateway reference associated with the tender transaction.
- `test`: `Boolean!` — Whether the transaction is a test transaction.
- `transactionDetails`: `TenderTransactionDetails` — Information about the payment instrument used for the transaction.
- `user`: `StaffMember` — The staff member who performed the transaction.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [Order](../../types/objects/Order.md)
- [StaffMember](../../types/objects/StaffMember.md)
- [TenderTransactionDetails](../../types/unions/TenderTransactionDetails.md)
