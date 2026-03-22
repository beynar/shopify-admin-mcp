# Input Object: `SellingPlanFixedBillingPolicyInput`

The input fields required to create or update a fixed billing policy.

## Input Fields

- `remainingBalanceChargeTrigger`: `SellingPlanRemainingBalanceChargeTrigger` — When to capture the payment for the amount due.
- `remainingBalanceChargeExactTime`: `DateTime` — The date and time to capture the full payment.
- `remainingBalanceChargeTimeAfterCheckout`: `String` — The period after capturing the payment for the amount due (`remainingBalanceChargeTrigger`), and before capturing the full payment. Expressed as an ISO8601 duration.
- `checkoutCharge`: `SellingPlanCheckoutChargeInput` — The checkout charge policy for the selling plan.

## Related Types

- [SellingPlanCheckoutChargeInput](../../types/inputs/SellingPlanCheckoutChargeInput.md)
- [SellingPlanRemainingBalanceChargeTrigger](../../types/enums/SellingPlanRemainingBalanceChargeTrigger.md)
