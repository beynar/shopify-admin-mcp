# Object: `ShopifyPaymentsPayoutSummary`

Breakdown of the total fees and gross of each of the different types of transactions associated
with the payout.

## Fields

- `adjustmentsFee`: `MoneyV2!` — Total fees for all adjustments including disputes.
- `adjustmentsGross`: `MoneyV2!` — Total gross amount for all adjustments including disputes.
- `advanceFees`: `MoneyV2!` — Total fees for all advances.
- `advanceGross`: `MoneyV2!` — Total gross amount for all advances.
- `chargesFee`: `MoneyV2!` — Total fees for all charges.
- `chargesGross`: `MoneyV2!` — Total gross amount for all charges.
- `refundsFee`: `MoneyV2!` — Total fees for all refunds.
- `refundsFeeGross`: `MoneyV2!` — Total gross amount for all refunds.
- `reservedFundsFee`: `MoneyV2!` — Total fees for all reserved funds.
- `reservedFundsGross`: `MoneyV2!` — Total gross amount for all reserved funds.
- `retriedPayoutsFee`: `MoneyV2!` — Total fees for all retried payouts.
- `retriedPayoutsGross`: `MoneyV2!` — Total gross amount for all retried payouts.
- `usdcRebateCreditAmount`: `MoneyV2!` — Total amount for all usdc rebate credit balance adjustments.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
