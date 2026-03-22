# Enum: `AppSubscriptionReplacementBehavior`

The replacement behavior when creating an app subscription for a merchant with an already existing app subscription.

## Values

- `APPLY_IMMEDIATELY` — Cancels the merchant's current app subscription immediately and replaces it with the newly created app subscription.
- `APPLY_ON_NEXT_BILLING_CYCLE` — Defers canceling the merchant's current app subscription and applying the newly created app subscription until the start of the next billing cycle. This value is ignored if the new app subscription is using a different currency than the current app subscription, in which case the new app subscription is applied immediately.
- `STANDARD` — Cancels the merchant's current app subscription immediately and replaces it with the newly created app subscription, with the exception of
