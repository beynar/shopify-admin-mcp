# Enum: `AppSubscriptionStatus`

The status of the app subscription.

## Values

- `PENDING` — The app subscription is pending approval by the merchant.
- `ACCEPTED` *(deprecated)* — The app subscription has been approved by the merchant and is ready to be activated by the app.
- `ACTIVE` — The app subscription has been approved by the merchant. Active app subscriptions are billed to the shop. After payment, partners receive payouts.
- `DECLINED` — The app subscription was declined by the merchant. This is a terminal state.
- `EXPIRED` — The app subscription wasn't approved by the merchant within two days of being created. This is a terminal state.
- `FROZEN` — The app subscription is on hold due to non-payment. The subscription re-activates after payments resume.
- `CANCELLED` — The app subscription was cancelled by the app. This could be caused by the app being uninstalled, a new app subscription being activated, or a direct cancellation by the app. This is a terminal state.
