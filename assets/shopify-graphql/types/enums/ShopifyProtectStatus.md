# Enum: `ShopifyProtectStatus`

The status of an order's protection with Shopify Protect.

## Values

- `PENDING` — The protection for the order is pending and has not yet been determined.
- `ACTIVE` — The protection for the order is active and eligible for reimbursement against fraudulent chargebacks.
- `INACTIVE` — The protection for an order isn't active because the order didn't meet eligibility requirements.
- `PROTECTED` — The order received a fraudulent chargeback and it was protected.
- `NOT_PROTECTED` — The order received a chargeback but the order wasn't protected because it didn't meet coverage requirements.
