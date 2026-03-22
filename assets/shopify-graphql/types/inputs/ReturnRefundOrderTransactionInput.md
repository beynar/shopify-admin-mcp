# Input Object: `ReturnRefundOrderTransactionInput`

The input fields to create order transactions when refunding a return.

## Input Fields

- `transactionAmount`: `MoneyInput!` — The amount of money for the transaction in the presentment currency of the order.
- `parentId`: `ID!` — The ID of the parent order transaction. The transaction must be of kind `CAPTURE` or a `SALE`.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
