# Enum: `SellingPlanRemainingBalanceChargeTrigger`

When to capture the payment for the remaining amount due.

## Values

- `NO_REMAINING_BALANCE` — When there's no remaining balance to be charged after checkout.
- `EXACT_TIME` — At an exact time defined by the remaining_balance_charge_exact_time field.
- `TIME_AFTER_CHECKOUT` — After the duration defined by the remaining_balance_charge_time_after_checkout field.
- `ON_FULFILLMENT` — When the order is fulfilled.
