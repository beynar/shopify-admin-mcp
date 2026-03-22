# Object: `SellingPlanFixedBillingPolicy`

The fixed selling plan billing policy defines how much of the price of the product will be billed to customer
at checkout. If there is an outstanding balance, it determines when it will be paid.

## Fields

- `checkoutCharge`: `SellingPlanCheckoutCharge!` — The checkout charge when the full amount isn't charged at checkout.
- `remainingBalanceChargeExactTime`: `DateTime` — The exact time when to capture the full payment.
- `remainingBalanceChargeTimeAfterCheckout`: `String` — The period after remaining_balance_charge_trigger, before capturing the full payment. Expressed as an ISO8601 duration.
- `remainingBalanceChargeTrigger`: `SellingPlanRemainingBalanceChargeTrigger!` — When to capture payment for amount due.

## Related Types

- [SellingPlanCheckoutCharge](../../types/objects/SellingPlanCheckoutCharge.md)
- [SellingPlanRemainingBalanceChargeTrigger](../../types/enums/SellingPlanRemainingBalanceChargeTrigger.md)
