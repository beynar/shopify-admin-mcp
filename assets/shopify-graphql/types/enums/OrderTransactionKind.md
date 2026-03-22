# Enum: `OrderTransactionKind`

The different kinds of order transactions.

## Values

- `SALE` — An authorization and capture performed together in a single step.
- `CAPTURE` — A transfer of the money that was reserved by an authorization.
- `AUTHORIZATION` — An amount reserved against the cardholder's funding source.
- `VOID` — A cancelation of an authorization transaction.
- `REFUND` — A partial or full return of captured funds to the cardholder.
- `CHANGE` — The money returned to the customer when they've paid too much during a cash transaction.
- `EMV_AUTHORIZATION` — An authorization for a payment taken with an EMV credit card reader.
- `SUGGESTED_REFUND` — A suggested refund transaction that can be used to create a refund.
