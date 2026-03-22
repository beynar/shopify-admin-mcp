# Enum: `ShopifyPaymentsBalanceTransactionPayoutStatus`

The payout status of the balance transaction.

## Values

- `SCHEDULED` — The payout has been created and had transactions assigned to it, but
- `IN_TRANSIT` *(deprecated)* — The payout has been submitted to the bank.
- `PAID` — The payout has been successfully deposited into the bank.
- `FAILED` — The payout has been declined by the bank.
- `CANCELED` — The payout has been canceled by Shopify.
- `PENDING` — The transaction has not been assigned a payout yet.
- `ACTION_REQUIRED` — The transaction requires action before it can be paid out.
