# Enum: `OrderDisplayFinancialStatus`

Represents the order's current financial status.

## Values

- `PENDING` — Displayed as **Pending**. Orders have this status when the payment provider needs time to complete the payment, or when manual payment methods are being used.
- `AUTHORIZED` — Displayed as **Authorized**. The payment provider has validated the customer's payment information. This status appears only for manual payment capture and indicates payments should be captured before the authorization period expires.
- `PARTIALLY_PAID` — Displayed as **Partially paid**. A payment was manually captured for the order with an amount less than the full order value.
- `PARTIALLY_REFUNDED` — Displayed as **Partially refunded**. The amount refunded to a customer is less than the full amount paid for an order.
- `VOIDED` — Displayed as **Voided**. An unpaid (payment authorized but not captured) order was manually
- `PAID` — Displayed as **Paid**. Payment was automatically or manually captured, or the order was marked as paid.
- `REFUNDED` — Displayed as **Refunded**. The full amount paid for an order was refunded to the customer.
- `EXPIRED` — Displayed as **Expired**. Payment wasn't captured before the payment provider's deadline on an authorized order. Some payment providers use this status to indicate failed payment processing.
