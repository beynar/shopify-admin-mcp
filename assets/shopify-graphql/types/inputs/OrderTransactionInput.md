# Input Object: `OrderTransactionInput`

The input fields for the information needed to create an order transaction.

## Input Fields

- `amount`: `Money!` — The amount of money for this transaction.
- `gateway`: `String!` — The payment gateway to use for this transaction.
- `kind`: `OrderTransactionKind!` — The kind of transaction.
- `orderId`: `ID!` — The ID of the order associated with the transaction.
- `parentId`: `ID` — The ID of the optional parent transaction, for example the authorization of a capture.

## Related Types

- [OrderTransactionKind](../../types/enums/OrderTransactionKind.md)
